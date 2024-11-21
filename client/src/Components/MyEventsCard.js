import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../Redux/Actions/EventsActions';

const MyEventsCard = ({ el, userId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{ width: '295px', height: '340px' }} // Card dimensions
    >
      <div className="relative">
        <Link to={`/EventPage/${el._id}`}>
          <img
            src={el.eventPic}
            alt={el.Game}
            className="rounded-t-lg"
            style={{ width: '295px', height: '170px', objectFit: 'cover' }} // Image dimensions
          />
        </Link>
      </div>
      <div
        className="p-3 flex flex-col justify-between"
        style={{ width: '295px', height: '170px' }} // Content area dimensions
      >
        <div>
          <Link to={`/EventPage/${el._id}`}>
            <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {el.Game}
            </h5>
          </Link>
          <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">{el.Location}</p>
          <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">{el.Description}</p>
        </div>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => navigate(`/ParticipantList/${el._id}`)}
            className="px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Participants
          </button>
          <button
            onClick={() => navigate(`/UpdateEvent/${el._id}`)}
            className="px-3 py-2 text-xs font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Update
          </button>
          <button
            onClick={() => dispatch(deleteEvent(el._id, location, navigate, userId))}
            className="px-3 py-2 text-xs font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventsCard;
