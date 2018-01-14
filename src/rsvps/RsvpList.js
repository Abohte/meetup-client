import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import {connect} from 'react-redux'

class RsvpList extends PureComponent {
	static propTypes = {
		rsvps: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	render() {
		return (
      <div className="rsvp list" style={{width: 500, float: 'left'}}>
				<header>
					<h2>RSVP list</h2>
				</header>

				<main>
					{ this.props.rsvps.map(rsvp => <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />) }
				</main>
			</div>
		)
	}
}

// const mapStateToProps = ({ rsvps }) => ({ rsvps })
const mapStateToProps = function (state) {
  return {
    rsvps: state.rsvps
  }
}

export default connect(mapStateToProps)(RsvpList)
