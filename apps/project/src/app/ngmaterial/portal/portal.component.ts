import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component, OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { UploadComponent } from './upload/upload.component';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, AfterViewInit, OnDestroy {

  foods: Food[] = [
    { value: 'componentPortal', viewValue: '컴포넌트' },
    { value: 'templatePortal', viewValue: '템플릴' },
    { value: 'domPortal', viewValue: '돔' }
  ];

  selectedValue: string;
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<UploadComponent>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;


  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {


  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(UploadComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  changeSelect(val: string): void {
    if (val === 'componentPortal') {
      this.selectedPortal = this.componentPortal;
    } else if (val === 'templatePortal') {
      this.selectedPortal = this.templatePortal;
    } else if (val === 'domPortal') {
      this.selectedPortal = this.domPortal;
    }

  }


}

