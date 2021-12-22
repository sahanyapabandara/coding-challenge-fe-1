import { connect } from "react-redux";
import { todoFilterActions } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state) => ({
  selectedId: state.task.selectedFilterId,
  filters: state.task.filters,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(todoFilterActions(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
