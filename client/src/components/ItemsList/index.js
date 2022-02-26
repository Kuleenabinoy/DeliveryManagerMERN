import React from "react";
//import { useMutation } from "@apollo/client";
//import { REMOVE_ITEM } from "../../utils/mutations";
//import { QUERY_SINGLE_TEAM } from "../../utils/queries";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const styles = {
    btnstyle: {
        // padding: 4,
        margin: 3,
    },
};

// const ItemsList = ({ items }) => {
//     const [removeItem, { error }] = useMutation(REMOVE_ITEM, {
//         update(cache, { data: { removeItem } }) {
//             //remove item not working

//             try {
//                 cache.writeQuery({
//                     //  query: QUERY_SINGLE_TEAM, //Not Query_me because manger is removing
//                     //       data: { removeItem },
//                 });
//             } catch (e) {
//                 console.error(e);
//             }
//         },
//     });
const ItemsList = ({ items }) => {
    if (!items.length) {
        return <h3>No Items Added</h3>;
    }

    // const handleRemoveItem = async (item) => {
    //     try {
    //         const { data } = await removeItem({
    //             variables: { item },
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
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
                                <h4 className="  card-header  text-light p-2 m-0">
                                    {item + "\t\t"}
                                    {/* <button
                                        style={styles.btnstyle}
                                        className="  btn btn-sm btn-danger  "
                                        // onClick={() => handleRemoveItem(item)}
                                    >
                                        <DeleteOutlined />
                                    </button>
                                    <button
                                        style={styles.btnstyle}
                                        className="  btn btn-sm btn-danger  "
                                        // onClick={() => handleEditItem(item)}
                                    >
                                        <EditOutlined />
                                    </button> */}
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ItemsList;
