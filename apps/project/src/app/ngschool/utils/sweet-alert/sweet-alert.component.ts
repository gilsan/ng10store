import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sweetAlert() {
    Swal.fire({
      title: '알림',
      text: '홈으로 이동 하시겠습니까.',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: '이동!',
      cancelButtonText: '이동안함'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          '확인',
          '이동 합니다.',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          '취소',
          '이동을 중지합니다. :)',
          'error'
        )
      }
    })
  }

}
