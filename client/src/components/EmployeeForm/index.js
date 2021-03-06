import React from "react";

const ItemsList = ({ items, isLoggedInUser = true }) => {
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
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ItemsList;
