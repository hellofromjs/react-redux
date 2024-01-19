import { Button, ButtonGroup } from 'react-bootstrap'
import { filterTodo } from '../../store/actions/TodoActions'
import { connect } from 'react-redux'

const Nav = (props) => {
    const { filterTodo } = props

    return (
        <ButtonGroup style={{ marginLeft: '156px' }}>
            <Button variant='warning' onClick={() => filterTodo('AKTYVIOS')}>Aktyvios</Button>
            <Button variant='info' onClick={() => filterTodo('VISOS')}>Visos uzduotys</Button>
            <Button variant='success' onClick={() => filterTodo('PABAIGTOS')}>Uzbaigtos</Button>
        </ButtonGroup>
    )
}

export default connect(null, { filterTodo })(Nav)