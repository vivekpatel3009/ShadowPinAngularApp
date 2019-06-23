import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AuthRights } from '../../auth/auth-rights';
@Component({
  selector: 'app-scheduler-admin',
  templateUrl: './scheduler-admin.component.html',
  styleUrls: ['./scheduler-admin.component.scss']
})
export class SchedulerAdminComponent implements OnInit {
  DeviceList_temp: any = []
  DeviceList: any = []
  config: any;

  eventId:any;
  DeviceId:any;
  Device_Id:any;



  objcurrentpage: any;
  dropdownList = [];
  itemId:any;
  Event_Id:any;

  currentstate:any;
  mode=AuthRights;
  //************************************** */
  constructor(public authService:AuthService,public router:ActivatedRoute) {

    this.currentstate = this.router.snapshot.data;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  openAjaxSwal() {
    swal({
      title: 'Add an email for Event Recipients',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              swal.showValidationError(
                'This email is already taken.'
              );
            }
            resolve();
          }, 2000);
        });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        swal({
          type: 'success',
          title: 'Success added new email',
          html: 'Submitted email: ' + result.value
        });
      }
    });
  }

  // public doSelect(value: any) {

  //   console.log('doSelect')
  //   console.log(value)
  // };

  // public doRemove(value: any){
  //   console.log('doRemove')
  //   console.log(value)
  // }


  doEventSelect(value: any) {
    this.DeviceList_temp = this.DeviceList.filter(
      item => item.EventName === value);
  }
  doDeviceSelect(value: any) {
    this.DeviceList_temp = this.DeviceList_temp.filter(
      item => item.DeviceName === value);
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Event-1' ,DeviceName:'Scooter[240-001]'},
      { item_id: 2, item_text: 'Event-2' ,DeviceName:'Scooter[240-001]'},
      { item_id: 3, item_text: 'Event-3' ,DeviceName:'Scooter[240-001]'},
      { item_id: 4, item_text: 'Event-4' ,DeviceName:'Scooter[240-001]'},
      { item_id: 5, item_text: 'Event-5' ,DeviceName:'Scooter[240-001]'},
      { item_id: 6, item_text: 'Event-6',DeviceName:'Scooter[240-001]' },
      { item_id: 7, item_text: 'Event-7' ,DeviceName:'Scooter[240-001]'},
      { item_id: 8, item_text: 'Event-8',DeviceName:'Scooter[240-001]' },
      { item_id: 9, item_text: 'Event-9',DeviceName:'Scooter[240-001]' },
      { item_id: 10, item_text: 'Event-10',DeviceName:'Scooter[240-001]' },
    ];

    this.DeviceList = [
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-001]', EventName: 'Event-1', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-002]', EventName: 'Event-2', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-003]', EventName: 'Event-3', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-004]', EventName: 'Event-4', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-005]', EventName: 'Event-5', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-006]', EventName: 'Event-6', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-007]', EventName: 'Event-7', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-008]', EventName: 'Event-8', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-009]', EventName: 'Event-9', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-010]', EventName: 'Event-10', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-011]', EventName: 'Event-1', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-021]', EventName: 'Event-2', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-031]', EventName: 'Event-1', EventRecipients: 'test@gmail.com' },
      { EventOn: '2018/08/29 20:00', DeviceName: 'Scooter[240-041]', EventName: 'Event-5', EventRecipients: 'test@gmail.com' },
    ]
    this.DeviceList_temp = this.DeviceList;
  }
}
