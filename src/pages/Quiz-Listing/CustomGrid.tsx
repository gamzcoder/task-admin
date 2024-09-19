import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

type DataTableProps = {
  cols?: string[];
  data: any[];
  count: number;
  action?: string;
  showCheckbox?: boolean;
  showTableHead?: boolean;
  checkBoxLable?: string;
  onPageChange?: (params: { rows: number; page: number }) => void;
  onCheckboxChange?: (
    value: string | null | number | undefined,
    arg: string | undefined,
  ) => void;
  actionComp?: (item: any) => React.ReactNode;
};

const DataTable: React.FC<DataTableProps> = ({
  cols,
  data,
  count,
  action,
  showCheckbox = false,
  checkBoxLable,
  showTableHead = true,
  onPageChange,
  onCheckboxChange,
  actionComp,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedKey, setSelectedKey] = useState<
    string | number | null | undefined
  >(null);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (onPageChange) {
        onPageChange({ rows: rowsPerPage, page });
      }
    }
  };
  const handleCheckboxChange = (row: Record<string, string>) => {
    const { key, keyId } = row;
    const newSelectedKey = key === selectedKey ? null : key;
    setSelectedKey(newSelectedKey);
    if (onCheckboxChange) {
      onCheckboxChange(newSelectedKey, keyId);
    }
  };

  const renderTableRows = () => {
    return data.map((row, index) => (
      <TableRow key={index}>
        {showCheckbox && (
          <TableCell className=" w-1/12">
            <input
              type="checkbox"
              className="rounded-full h-full"
              checked={row.key === selectedKey}
              onChange={() => handleCheckboxChange(row)}
            />
          </TableCell>
        )}
        {cols?.map((col, idx) => <TableCell key={idx}>{row[col]}</TableCell>)}
        {actionComp && <TableCell>{actionComp(row)}</TableCell>}
      </TableRow>
    ));
  };

  const renderPagination = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return (
      <Pagination className="flex justify-end mt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {paginationItems}
          {totalPages > 5 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="max-h-96 overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {showCheckbox && <TableHead>{checkBoxLable}</TableHead>}
            {showTableHead &&
              cols?.map((col, index) => (
                <TableHead key={index}>{col}</TableHead>
              ))}
            {action && <TableHead>{action}</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
      {renderPagination()}
    </div>
  );
};

export default DataTable;
