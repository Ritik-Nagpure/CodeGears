import { Link } from 'react-router-dom'


function header() {
  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
        <Link to='/'>
          <p className='text-xl'>Codegears</p>
          <p className='text-sm'>Project Name</p>
        </Link>
      </div>

      <div className={'flex flex-row space-x-4'}>
        <Link to="kanban"><button>Kanban</button></Link>
        <Link to="todo"><button>Todo</button></Link>
        <Link to="about"><button>About</button></Link>
        <Link to="profile"><button>Profile</button></Link>
      </div>
    </div>
  );
}

export default header