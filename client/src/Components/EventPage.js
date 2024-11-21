import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteEvent, getonevent } from '../Redux/Actions/EventsActions';
import Button from 'react-bootstrap/esm/Button';

const EventPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        dispatch(getonevent(id));
    }, [dispatch, id]);

    const oneEvent = useSelector(state => state.eventsReducer.oneEvent);

    const user = useSelector(state => state.AuthReducer.user);

    return (
        <div className="ml-8 mt-10 flex justify-start items-center">
            {/* Flowbite Card */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/2" style={{margin : '30px'}}>
                <a href={`/EventPage/${oneEvent._id}`}>
                    <img
                        className="rounded-t-lg w-full"
                        src={oneEvent.eventPic}
                        alt={oneEvent.Game}
                    />
                </a>
                <div className="p-5">
                    <a href={`/EventPage/${oneEvent._id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {oneEvent.Game}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {oneEvent.Location}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {oneEvent.Description}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Date: {oneEvent?.Date?.slice(0, 10)}
                    </p>

                    <div className="flex gap-4">
                        {/* Conditionally render the buttons only if the user is the event owner */}
                        {oneEvent.owner === user._id && (
                            <>
                            <Button
                                onClick={() => dispatch(deleteEvent(id, location,navigate))}
                                className="bg-red-600 text-white hover:bg-red-700"
                            >
                                Delete
                            </Button>
                            
                            <Link
                                to={`/UpdateEvent/${id}`}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update
                            </Link>
                            </>
                        )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
