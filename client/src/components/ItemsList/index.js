import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
const ItemsList = ({ items }) => {
    const [removeItem, { error }] = useMutation(REMOVE_ITEM, {
        update(cache, { data: { removeItem } }) {
            try {
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: removeItem },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });
    const handleRemoveItem = async (item) => {
        try {
            const { data } = await removeItem({
                variables: { item },
            });
        } catch (err) {
            console.error(err);
        }
    };
    if (!items.length) {
        return <h3>No Items Yet</h3>;
    }

    return (
        <div>
            <div className="flex-row justify-space-between my-4">
                {items &&
                    items.map((item) => (
                        <div key={item} className=" col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className=" card-header  text-light p-2 m-0">
                                    {item} <br />
                                    <button
                                        className="btn btn-sm btn-danger ml-auto"
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        Delete
                                    </button>
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ItemsList;
