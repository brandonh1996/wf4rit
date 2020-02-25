import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Modal from '@material-ui/core/Modal';
import { FormBuilder } from 'cb-react-forms';
import { FormGenerator } from 'cb-react-forms';

const items = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header"
  },
  {
    key: "Label",
    name: "Label",
    icon: "fa fa-font"
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    icon: "fa fa-paragraph"
  },
  {
    key: "LineBreak",
    name: "Line Break",
    icon: "fa fa-arrows-h"
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    icon: "fa fa-caret-square-o-down"
  },
  {
    key: "Tags",
    name: "Tags",
    icon: "fa fa-tags"
  },
  {
    key: "Checkboxes",
    name: "Checkboxes",
    icon: "fa fa-check-square-o"
  },
  {
    key: "RadioButtons",
    name: "Multiple Choice",
    icon: "fa fa-dot-circle-o"
  },
  {
    key: "TextInput",
    name: "Text Input",
    icon: "fa fa-font"
  },
  {
    key: "NumberInput",
    name: "Number Input",
    icon: "fa fa-plus"
  },
  {
    key: "TextArea",
    name: "Multi-line Input",
    icon: "fa fa-text-height"
  },
  {
    key: "Rating",
    name: "Rating",
    icon: "fa fa-star"
  },
  {
    key: "HyperLink",
    name: "Web site",
    icon: "fa fa-link"
  },
  {
    key: "Range",
    name: "Range",
    icon: "fa fa-sliders"
  },
  {
    key: "Email",
    name: "Email",
    icon: "fa fa-at"
  },
  {
    key: "Date",
    name: "Date",
    icon: "fa fa-calendar"
  },
  {
    key: "Signature",
    name: "Signature",
    icon: "fa fa-edit"
  }
];
 
const onSubmit = (formData) => console.log(formData);

const Example = props => (
  <FormBuilder 
    onSubmit={onSubmit}  // function
    items={items}     // array of toolbar items
  />
);

const ExampleGenerate = props => (
  <FormGenerator 
    formData={[{"id":"4f75fe84-7074-4e24-8d1a-12c5fffd644e","element":"Header","label":{"blocks":[{"key":"4mt5m","text":"Placeholder Label","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}},{"id":"1cfdc06c-6994-4822-bdd5-d6fdd013d08c","element":"Label","label":{"blocks":[{"key":"bc2a8","text":"Placeholder Label","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}},{"id":"bbb9deaa-b568-491a-8270-96681f405989","element":"Paragraph","label":{"blocks":[{"key":"dpv6j","text":"Placeholder Label","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}}]}     // JSON data from 
    onSubmit={onSubmit}     // function
    readOnly={true}     // boolean
    //responseData={} // answers data to pre-fill the form
  />
);

const useStylesModal = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('36C', 1, "John Doe", "2019-28-01", "2020-28-01"),
    createData('78B', 1, "John Doe", "2019-28-01", "2020-28-01"),
    createData('128-B', 0, "John Doe", "2019-28-01", "2020-28-01"),
    createData('67-9B', 1, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('AA-27', 1, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('45-AB', 0, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('6C-GH', 1, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('A56', 1, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('AL-67', 0, "John Doe", "2019-28-01", "2020-28-01"),
    createData('LK-HH', 0, "John Doe", "2019-28-01", "2020-28-01"),
    createData('MR-71', 0, "Jane Doe", "2019-28-01", "2020-28-01"),
    createData('SR-46', 0, "John Doe", "2019-28-01", "2020-28-01"),
    createData('AA-LH', 1, "John Doe", "2019-28-01", "2020-28-01"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Active' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Created By' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Date Created' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Date Updated' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Documents
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //var FormBuilder = require('react-form-builder2');

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Button onClick={handleOpen} variant="contained" color="primary" style={{ backgroundColor: '#F76902' }}>
          Create New Document
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{overflow:'scroll'}}
      >
        <div style={{position: 'absolute', top: '5%', left: '35%', width: '800px', maxHeight: '300%', backgroundColor: 'white'}} className={classes.paper}>
          <Example />
        </div>
      </Modal>
    </div>
  );
}
