import { Pagination } from "antd";

export default function PaginationPage() {
  function onPageChange(e) {
    idGenre.get("genres")
      ? setQueryPage(
          createSearchParams({
            genres: idGenre.get("genres"),
            page: e,
          })
        )
      : setQueryPage(
          createSearchParams({
            page: e,
          })
        );
  }

  return (
    <Pagination
      onChange={onPageChange}
      Current={currentPage.page}
      total={currentPage.total_pages}
      style={{ colorText: "#FFF" }}
    />
  );
}
