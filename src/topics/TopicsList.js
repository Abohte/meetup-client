import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class TopicsList extends PureComponent {
	static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
  	}))
	}

	render() {
    const {topics} = this.props
		return (
			<div className="topics list" style={{width: 350, float: 'left'}}>
				<header>
					<h2>Topics Top 10</h2>
				</header>

				<main>
					<ol>
						{ topics.map((topic, index) =>
							<li key={topic.topic}>{topic.topic} ({topic.count})</li>) }
					</ol>
				</main>
			</div>
		)
	}
}

const mapStateToProps = ({ topics }) => ({ topics })
// const mapStateToProps = function (state) {
// 	return {
// 		topics: state.topics
// 	}
// }

export default connect(mapStateToProps)(TopicsList)
