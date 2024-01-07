import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}
  toastrOptions = {
    timeOut: 5000,
    closeButton: true,
    progressBar: true,
  };
  showSuccess(message: string) {
    this.toastr.success(message, 'Success', this.toastrOptions);
  }

  showError(message: string) {
    this.toastr.error(message, 'Error', this.toastrOptions);
  }

  showInfo(message: string) {
    this.toastr.info(message, 'Info', this.toastrOptions);
  }

  showWarning(message: string) {
    this.toastr.warning(message, 'Warning', this.toastrOptions);
  }
}
