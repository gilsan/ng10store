import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { merge, Observable } from 'rxjs';
import { filter, map, mapTo, startWith, tap } from 'rxjs/operators';


export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @ViewChild(MatInput, { read: ElementRef, static: true }) private inputEl: ElementRef;
  @ViewChild(CdkConnectedOverlay, { static: true }) private connectedOverlay: CdkConnectedOverlay;

  isOpen = false;
  showPanel$: Observable<boolean>;
  isPanelVisible$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;

  states: State[] = [
    {
      name: 'Vienna',
      population: '1.897M',
      flag:
        'https://commons.wikimedia.org/wiki/File:Flag_of_California.svg',
    },
    {
      name: 'Salzburg',
      population: '152.367K',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Salzburg_%28state%29.svg/1280px-Flag_of_Salzburg_%28state%29.svg.png',
    },
    {
      name: 'Kiev',
      population: '2.884M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kyiv_Kurovskyi.svg',
    },
    {
      name: 'Novopskov',
      population: '9,891K',
      flag:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png/100px-Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png',
    },
  ];

  filteredStates$: Observable<State[]>;
  isCaseSenitive: boolean = false;
  stateCtrl = new FormControl();
  constructor(
    private focusMonitor: FocusMonitor
  ) { }

  ngOnInit(): void {
    this.isPanelHidden$ = this.connectedOverlay.backdropClick.pipe(
      tap(data => console.log('isPanelHidden: ', data)),
      mapTo(false),

    );
    this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
      tap(data => console.log('isPanel: ', data)),
      filter(focused => !!focused),
      mapTo(true),


    );

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$)
      .pipe(
        tap(data => console.log(data))
      )

    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    )


  }

  _filterStates(value: string) {
    const filterValue = this.caseCheck(value);
    return this.states.filter((state) => {
      this.caseCheck(state.name).indexOf(filterValue) === 0
    })
  }

  caseCheck(value: string) {
    return this.isCaseSenitive ? value : value.toLowerCase();
  }


  setCaseSensitive({ checked }: MatSlideToggleChange) {
    this.isCaseSenitive = checked;
  }

  item1() {
    console.log('click item1');
    this.isOpen = false;
    alert('click item1...');
  }

  item2() {
    console.log('click item2');
    this.isOpen = false;
  }

  item3() {
    console.log('click item3');
    this.isOpen = false;
  }

}
