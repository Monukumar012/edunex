import React, { Fragment, useEffect, useState } from 'react'
import './ServiceSectionStyle.css'
import Domain from './Domain'
import { getDomain } from '../../actions/domainAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { useAlert } from 'react-alert'


const ServiceSection = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  const alert = useAlert()

  const dispatch = useDispatch();

  const {error, domains } = useSelector(state => state.domains)

  useEffect(() => {

    if (error) {
      return alert.error(error)
    }

    dispatch(getDomain())
      .then(() => {
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching domain details:', error);
        setDataLoaded(true);
      });
  }, [dispatch, error, alert])




  return (
    <Fragment>


      {!dataLoaded ? <Loader /> :

        (<div className='service'>
          <div className='service-top'>
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
          </div>

          <div className='service-bottom'>

            {domains && domains.map((domain) =>
              <Domain key={domain._id} domain={domain} />
            )}

          </div>

        </div>)

      }

    </Fragment>
  )
}

export default ServiceSection