import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = ({ getPagesCount, currentPage, setCurrentPage }) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

      {getPagesCount().map((item) =>
        item == currentPage ? (
          <Pagination.Item
            onClick={() => setCurrentPage(item)}
            key={item}
            active
          >
            {item}
          </Pagination.Item>
        ) : (
          <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
            {item}
          </Pagination.Item>
        )
      )}

      <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationList;
