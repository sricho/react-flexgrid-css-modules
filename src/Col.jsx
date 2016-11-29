import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = 'div';
const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ReorderType = PropTypes.oneOf(['first', 'last']);


export default class Row extends Component {
  static propTypes = {
    xs: ModificatorType,
    sm: ModificatorType,
    md: ModificatorType,
    lg: ModificatorType,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    xsReorder: ReorderType,
    smReorder: ReorderType,
    mdReorder: ReorderType,
    lgReorder: ReorderType,
    reverse: PropTypes.bool,
    nodeName: PropTypes.string
  };

  static defaultProps = {
    nodeName: DEFAULT_NODE,
  };

  render() {
    const {
      xs, xsOffset,
      sm, smOffset,
      md, mdOffset,
      lg, lgOffset,
      reverse,
      nodeName,
      children,
      ...other
    } = this.props;
    const Element = nodeName || DEFAULT_NODE;
    const classes = cx({
      [flexboxgrid['col-xs' + (Number.isInteger(xs) ? '-' + xs : '')]]: xs,
      [flexboxgrid['col-sm' + (Number.isInteger(sm) ? '-' + xs : '')]]: sm,
      [flexboxgrid['col-md' + (Number.isInteger(md) ? '-' + xs : '')]]: md,
      [flexboxgrid['col-lg' + (Number.isInteger(lg) ? '-' + xs : '')]]: lg,
      [flexboxgrid['col-offset-xs-' + xsOffset]]: xsOffset,
      [flexboxgrid['col-offset-sm-' + smOffset]]: smOffset,
      [flexboxgrid['col-offset-md-' + mdOffset]]: mdOffset,
      [flexboxgrid['col-offset-lg-' + lgOffset]]: lgOffset,
      [flexboxgrid[xsReorder + '-xs']]: xsReorder,
      [flexboxgrid[smReorder + '-xs']]: smReorder,
      [flexboxgrid[mdReorder + '-xs']]: mdReorder,
      [flexboxgrid[lgReorder + '-xs']]: lgReorder,
      [flexboxgrid['col-reverse']]: reverse
    });

    return (
      <Element className={ classes } { ...other }>
        { children }
      </Element>
    );
  }
}
