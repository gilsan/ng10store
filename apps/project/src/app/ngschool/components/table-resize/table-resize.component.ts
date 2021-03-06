import { Component, OnInit } from '@angular/core';
import { Ipolymorphism } from '../../../models/model';
import { NgsService } from '../../../store/ngs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-table-resize',
  templateUrl: './table-resize.component.html',
  styleUrls: ['./table-resize.component.scss']
})
export class TableResizeComponent implements OnInit {

  polymorphismList: Ipolymorphism[];
  lists$: Observable<Ipolymorphism[]>;
  exist = 1000;
  message: string;

  form: FormGroup;

  constructor(
    private service: NgsService,
    private fb: FormBuilder
  ) { }



  ngOnInit(): void {
    this.getPolymorphismData();
    this.formLoad();
  }

  formLoad() {
    this.form = this.fb.group({
      gene: ['TET2'],
      amino: ['p.(R1404*)'],
      nucleotide: ['c.4210C>T']
    })
  }

  removeGeneCheck(gene: string, amino: string, nucleotide: string): number {
    const result = this.polymorphismList.findIndex(item =>
      item.gene === gene && item.amino_acid_change === amino && item.nucleotide_change === nucleotide
    );
    return result;
  }

  getPolymorphismData() {
    this.lists$ = this.service.getPolymorphism()
      .pipe(
        tap(data => this.polymorphismList = data)
      );
  }

  test() {
    console.log(this.form.value);
    this.exist = this.removeGeneCheck(
      this.form.value.gene,
      this.form.value.amino,
      this.form.value.nucleotide
    );

    if (this.exist === -1) {
      this.message = '존재하지 않습니다.'
    } else {
      this.message = '존재합니다'
    }
    /*
    amino_acid_change: "p.(R1404*)"
    gene: "TET2"
    id: 23
    nucleotide_change: "c.4210C>T"
    reason: "p.s curve ↓, C<T" 
    */

  }

}
