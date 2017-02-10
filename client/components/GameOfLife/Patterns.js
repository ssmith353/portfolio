import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'

const styles = {
  container: {
    display: 'inline-block'
  },
  topBtn: {
    margin: '5px',
    cursor: 'pointer',
  },
  button: {
    margin: '5px',
    cursor: 'pointer',
    display: 'block'
  }
}

let Patterns = ({expandPatterns, expanded, placePattern}) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.topBtn}
        className="btn btn-primary"
        onClick={expandPatterns}>Choose Pattern
      </button>
      <Collapse isOpened={expanded}>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => placePattern('Gosper Gun')}>Gosper Gun
        </button>
				<button
          style={styles.button}
          className="btn btn-info"
          onClick={() => placePattern('Pulsar')}>Pulsar
        </button>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => placePattern('Spaceship')}>Spaceship
        </button>
      </Collapse>
    </div>
  )
}

Patterns.propTypes = {
  expandPatterns: React.PropTypes.func.isRequired,
  expanded: React.PropTypes.bool.isRequired,
  placePattern: React.PropTypes.func.isRequired,
}

export default Patterns = Radium(Patterns)
