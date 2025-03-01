import "./pagination.scss";
import Button from "../../UI/Button";
export default function Pagination({
  children,
  pageNumber,
  toTalPages,
  handeChangePage,
}) {
  const renderPaginationItems = () => {
    const items = [];
    const visiblePages = 3;
    const halfVisible = Math.floor(visiblePages / 2);
    let startPage = pageNumber - halfVisible;
    let endPage = pageNumber + halfVisible;

    if (startPage <= 0) {
      startPage = 1;
      endPage = visiblePages;
    }

    if (endPage > toTalPages) {
      endPage = toTalPages;
      startPage = toTalPages - visiblePages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <li className="pagination__btn" key={i}>
          <Button
            className={
              pageNumber === i ? "button--purple" : "button--gradientBorder"
            }
            handler={() => handeChangePage(i)}
          >
            {i}
          </Button>
        </li>
      );
    }
    if (innerWidth > 768) {
      if (startPage > 1) {
        items.unshift(
          <li className="pagination__btn">
            <Button
              className="button--gradientBorder"
              handler={() => handeChangePage(1)}
            >
              1
            </Button>
          </li>
        );
        if (startPage > 2) {
          items.splice(
            1,
            0,
            <li className="pagination__btn">
              <Button className="button">...</Button>
            </li>
          );
        }
      }
      if (endPage < toTalPages) {
        items.push(
          <li className="pagination__btn">
            <Button
              className="button--gradientBorder"
              handler={() => handeChangePage(toTalPages)}
            >
              {toTalPages}
            </Button>
          </li>
        );
        if (endPage < toTalPages - 1) {
          items.splice(
            items.length - 1,
            0,
            <li className="pagination__btn">
              <Button className="button">...</Button>
            </li>
          );
        }
      }
    }

    return items;
  };
  return (
    <div className="pagination__box">
      <div className="pagination__data">{children}</div>
      <ul className="pagination">
        <li className="pagination__arrow">
          <Button
            className="button--gradientBorder"
            handler={() =>
              pageNumber > 1 ? handeChangePage((prevPage) => prevPage - 1) : ""
            }
          >
            <img
              src="/assets/UI/arrowPagination.svg"
              alt="pagination_arrow"
              width={24}
              height={24}
              className="pagination__arrowImg"
            />
          </Button>
        </li>
        {renderPaginationItems()}
        <li className="pagination__arrow">
          <Button
            className="button--gradientBorder"
            handler={() =>
              pageNumber < toTalPages
                ? handeChangePage((prevPage) => prevPage + 1)
                : ""
            }
          >
            <img
              src="/assets/UI/arrowPagination.svg"
              alt="pagination_arrow"
              style={{ transform: "rotate(180deg)" }}
              width={24}
              height={24}
              className="pagination__arrowImg"
            />
          </Button>
        </li>
      </ul>
    </div>
  );
}
