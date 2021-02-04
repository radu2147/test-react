import React from "react";

const Pagination = ({page, object, search, setPage, setObject, setSearch}) => {
    return (
        <div className="pagination">
                    <ul className="paginList">
                        <span className="list-item-pagination" onClick={e => {
                                if(page > 1 && page < object.length){
                                    setPage(page - 1);
                                    setObject(Object.assign({loading: true}))
                                    setSearch(!search);
                                }}}>
                                « 
                        </span>
                        <span className="list-item-pagination">
                            <a>
                                {page}
                            </a>
                        </span>
                        <span className="list-item-pagination"  onClick={e => {
                                    if(page < object.length){
                                        setPage(page + 1);
                                        setObject(Object.assign({loading: true}));
                                        setSearch(!search);
                                    }
                                }}>
                                »
                        </span>
                    </ul>
                </div>
    )
}

export default Pagination;