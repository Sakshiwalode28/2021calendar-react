

import React,{Component, useRef,useState} from 'react';



//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//jquery, popper.js libraries for bootstrap modal
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import { Button, Card, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom'

import EventList from './EventList';

function UserCalendar() {


    const [modalOpen, setModalOpen] = useState(false)
    const calendarRef = useRef(null)

    
    const onEventAdded = e => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(e)
    }
  return (
    <>
      
      <Card className=' bg-white mt-5 mb-5 text-right' style={{ width: 1200}}>
      <CardBody>
          <FullCalendar
          ref={calendarRef}
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2021-05-01' },
              { title: 'event 2', date: '2021-05-02' }
            ]}
          />
     
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <div class="modal-header">
                  <h4 class="modal-title align-center">Add Event</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                  <EventList/>
                
                <div class="modal-body text-center">
                  
                </div>
              
               
               
                
              </div>
            </div>
          </div>
          </CardBody>
          </Card>

     
    </>
  );
}

export default UserCalendar;







