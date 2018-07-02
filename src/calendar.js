import './calendar.scss';

export class Calendar {
  constructor() {
    this.heading = 'Calendar App';

    //some default events
    this.events = [
    {
      id: 0,
      title: "Google Summit",
      date: 3
    },
    {
      id: 1,
      title: "NY Hackathon",
      date: 11
    },
    {
      id: 2,
      title: "DevCon",
      date: 17
    }
    ];
    this.newest_id = 3;
    this.bound_event_date = 1;
    this.bound_event_title = "Title";
    this.current_edit_index = null;
  }

  //Add an event from the fields bound in the modal
  addEvent() {
    this.events.push({
      id: this.newest_id,
      title: this.bound_event_title,
      date: this.bound_event_date
    });
    this.newest_id += 1;

    this.closeAddEventModal();
  }

  //delete the current event by index, hide modal
  deleteEvent() {
    this.events.splice(this.current_edit_index, 1);
    this.current_edit_index = null;

    document.getElementById('editEventModal').style.display='none';
  }


  //Update the Event, hide the modal
  editEvent() {
    this.events[this.current_edit_index].date = this.bound_event_date;
    this.events[this.current_edit_index].title = this.bound_event_title; 
    this.current_edit_index = null;

    document.getElementById('editEventModal').style.display='none';
  }

  //set the modal values to the event being editted
  openEditEventModal(e){
    let id = e.target.value;
    this.current_edit_index = this.events.findIndex(event => event.id == id);
    this.bound_event_date = this.events[this.current_edit_index].date;
    this.bound_event_title = this.events[this.current_edit_index].title;

    document.getElementById('editEventModal').style.display='block';
  }

  //set the modal values to defaults
  openAddEventModal(){
    this.bound_event_date = 1;
    this.bound_event_title = "Title";

    document.getElementById('addEventModal').style.display='block';
  }

  closeAddEventModal(){
    document.getElementById('addEventModal').style.display='none';
  }

  closeEditEventModal(){
    this.current_edit_index = null;
    document.getElementById('editEventModal').style.display='none';
  }

}