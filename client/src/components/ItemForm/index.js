import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../../utils/mutations";

const styles = {
    btnStyle: {
        background: "#505d8c",
        cursor: "pointer",
        color: "black",
        margin: 5,
    },
};
const randomNo = () => {
    const min = 100;
    const max = 100000;
    const rNo = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(rNo);
};
const ItemForm = ({ teamId }) => {
    const [item, setItem] = useState("");

    const [addItem, { error }] = useMutation(ADD_ITEM);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addItem({
                variables: { teamId, item },
            });

            setItem("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h4>Add items to deliver.</h4>
            <form className="flex-row justify-center justify-space-between-md align-center" onSubmit={handleFormSubmit}>
                <div className="col-12 col-lg-9">
                    <input
                        placeholder="Add items and no of packs or pieces.."
                        value={item}
                        className="form-input w-100"
                        onChange={(event) => setItem(event.target.value)}
                    />
                </div>

                <div className="col-12 col-lg-3">
                    <button style={styles.btnStyle} className="btn btn-info btn-block py-3" type="submit">
                        Add Item
                    </button>
                    <button className="btn btn-info btn-block py-3 " style={styles.btnStyle} onClick={randomNo}>
                        Generate Code
                    </button>
                </div>
                {error && <div className="col-12 my-3 bg-danger text-white p-3">Something went wrong...</div>}
            </form>
        </div>
    );
};

export default ItemForm;
