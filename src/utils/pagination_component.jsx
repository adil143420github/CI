/* eslint-disable no-param-reassign,react/destructuring-assignment,prefer-destructuring */
import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';

const defaultButton = props => (
    <Button variant="contained"
    color="default" {...props}  className="-btn">{props.children}</Button>
);

export default class PaginationComponent extends Component {
  constructor(props) {
    super();

    this.getSafePage = this.getSafePage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.applyPage = this.applyPage.bind(this);

    this.pageJump = this.pageJump.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.state = {
      page: props.page
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      rowTotal: props.sortedData.length,
      rowMin: props.page * props.pageSize + 1,
      rowMax: Math.min(
        (props.page + 1) * props.pageSize,
        props.sortedData.length
      )
    };
  }

  getSafePage(page) {
    if (Number.isNaN(page)) {
      page = this.props.page;
    }

    return Math.min(Math.max(page, 0), this.props.pages - 1);
  }

  changePage(page) {
    page = this.getSafePage(page);
    this.setState({ page });

    if (this.props.page !== page) {
      this.props.onPageChange(page);
    }
  }

  applyPage(e) {
    if (e) {
      e.preventDefault();
    }

    this.changePage(this.state.page === "" ? this.props.page : this.state.page);
  }

  pageJump(enteredPage) {
    const page = enteredPage - 1;
    if (enteredPage === "") {
      return this.setState({ page: enteredPage });
    }
    return this.setState({ page: this.getSafePage(page) });
  }

  handleKeyPress(e) {
    const returnKey = 13;

    if (e.which === returnKey || e.keyCode === returnKey) {
      this.applyPage();
    }
  }

  handleNextClick() {
    if (!this.props.canNext) return;

    this.changePage(this.props.page + 1);
  }

  handlePreviousClick() {
    if (!this.props.canPrevious) return;

    this.changePage(this.props.page - 1);
  }

  render() {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      showPageJump,
      canPrevious,
      style,
      previousText,
      nextText,
      ofText,
      rowsText,
      canNext,
      onPageSizeChange,
      className,
      pageText,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton
    } = this.props;

    const { rowTotal, rowMin, rowMax } = this.state;

    const pageInfoType = this.state.page === "" ? "text" : "number";
    const pageInfoValue = this.state.page === "" ? "" : this.state.page + 1;

    return (
      <div className={classnames(className, "-pagination")} style={style}>
        <div className="previous">
          <IconPrevious
            onClick={() => {
              this.handlePreviousClick();
            }}
            disabled={!canPrevious}
          >
            {previousText}
          </IconPrevious>
        </div>
        <div className="-center">
          <span className="-pageInfo">
            {pageText}{" "}
            {showPageJump ? (
              <div className="-pageJump">
                <input
                  type={pageInfoType}
                  onChange={e => {
                    this.pageJump(e.target.value);
                  }}
                  value={pageInfoValue}
                  onBlur={this.applyPage}
                  onKeyPress={e => {
                    this.handleKeyPress(e);
                  }}
                />
              </div>
            ) : (
              <span className="-currentPage">{page + 1}</span>
            )}{" "}
            {ofText} <span className="-totalPages">{pages || 1}</span>
          </span>
          {rowTotal !== 0 ? (
            <span className="-rowInfo">
              {"Viewing "}
              <span className="-rowMin">{rowMin}</span>
              {" - "}
              <span className="-rowMax">{rowMax}</span>
              {" of "}
              <span className="-rowTotal">{rowTotal}</span>
            </span>
          ) : (
            ""
          )}
          {showPageSizeOptions && (
            <span className="select-wrap -pageSizeOptions">
              <select
                defaultValue={pageSize}
                onChange={e => onPageSizeChange(Number(e.target.value))}
              >
                {pageSizeOptions.map((option, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={i} value={option}>
                    {`${option} ${rowsText}`}
                  </option>
                ))}
              </select>
            </span>
          )}
        </div>
        <div className="next">
          <IconNext
            onClick={() => {
              this.handleNextClick();
            }}
            disabled={!canNext}
          >
            {nextText}
          </IconNext>
        </div>
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  nextText: PropTypes.node,
  rowsText: PropTypes.node,
  ofText: PropTypes.node,
  pageText: PropTypes.node,
  previousText: PropTypes.node,
  pages: PropTypes.number,
  page: PropTypes.number,
  showPageSizeOptions: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.node),
  pageSize: PropTypes.number,
  showPageJump: PropTypes.bool,
  canPrevious: PropTypes.bool,
  canNext: PropTypes.bool,
  onPageSizeChange: PropTypes.func,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.node),
  PreviousComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  NextComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};

defaultButton.propTypes = {
  children: PropTypes.node
};
