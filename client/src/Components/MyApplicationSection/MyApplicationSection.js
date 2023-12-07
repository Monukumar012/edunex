import React, { useState, useEffect } from 'react'
import './MyApplicationStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApplication } from '../../actions/applicationAction'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert'




const MyApplicationSection = (props) => {

  const [dataLoaded, setDataLoaded] = useState(false);

  const alert = useAlert()

  const dispatch = useDispatch();

  const {applications } = useSelector(state => state.applications)


  useEffect(() => {

    dispatch(getApplication(props.email))
      .then(() => {
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log('Error fetching domain details:', error);
        setDataLoaded(true);
      });

  }, [dispatch, alert, props.email,dataLoaded])

  var cnt=1

  return (
    <div className={props.c1Name}>
      <h1>{props.heading1}</h1>
      <div className={props.c2Name}>
        {!dataLoaded ? <Loader /> : applications.length === 0 ? (
          <div className={props.c3Name}>
            <p>{props.para}</p>
          </div>
        ) : (
          <div className={props.c4Name}>
            {applications.map((item) => (
              <div key={item._id} className="main-1-2-1">
                <h2>
                  {cnt++}. {item.internship}
                </h2>
                <Link className='app-btn' to={`/my-application/${item._id}`}><p>Check Status</p></Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplicationSection