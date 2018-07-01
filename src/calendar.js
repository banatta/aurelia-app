import './calendar.scss';

export class Calendar {
  constructor() {
    this.heading = 'Calendar App';
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
    this.current_id = 3;

    this.bound_event_date = 1;
    this.bound_event_title = "Title";
  }

  //Add an event from the fields bound in the modal
  addEvent() {
    this.events.push({
      id: this.current_id,
      title: this.bound_event_title,
      date: this.bound_event_date
    });
    this.current_id += 1;

    this.closeModal();
  }

  deleteEvent() {

  }

  editEvent() {

  }

  openModal(){
    document.getElementById('eventModal').style.display='block';
  }

  closeModal(){
    document.getElementById('eventModal').style.display='none';
  }

}