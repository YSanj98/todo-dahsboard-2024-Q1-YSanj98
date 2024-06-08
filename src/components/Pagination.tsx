import { Box, IconButton } from "@mui/material";
import LeftPageNavigator from "../imgs/left-page-navigator.svg";
import RightPageNavigator from "../imgs/right-page-navigator.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const maxPageButtons = 3;

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxPageButtons / 2),
        totalPages - maxPageButtons + 1
      )
    );

    for (
      let i = startPage;
      i < startPage + maxPageButtons && i <= totalPages;
      i++
    ) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
      <IconButton
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <img src={LeftPageNavigator} alt="Left Page Navigator" />
      </IconButton>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={currentPage === page}
          style={{
            border: currentPage === page ? "2px solid #BC006D" : "none",
            borderRadius: "5px",
            margin: "0 5px",
          }}
        >
          {page}
        </button>
      ))}
      <IconButton
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <img src={RightPageNavigator} alt="Right Page Navigator" />
      </IconButton>
    </Box>
  );
};

export default Pagination;
