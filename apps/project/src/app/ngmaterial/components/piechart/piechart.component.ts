import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as D3 from 'd3';
import { IData } from '../../models/pie-data.interface';
import { PiechartService } from './../../services/piechart.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit, AfterViewInit {


  @ViewChild('containerPieChart') element: ElementRef;

  private host: D3.Selection<d3.BaseType, {}, d3.BaseType, any>;
  private svg: D3.Selection<SVGElement, {}, d3.BaseType, any>;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;
  private pieData: IData[];


  constructor(
    private dataService: PiechartService
  ) { }

  ngAfterViewInit(): void {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.htmlElement);
    this.dataService.$data.subscribe(data => {
      this.pieData = data;
      console.log('***** dra ******', this.pieData);
      this.setup();
      this.buildSVG();
      this.buildPie();
    })
  }

  ngOnInit(): void {
  }

  setup(): void {
    this.width = 250;
    this.height = 250;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
  }

  buildPie(): void {
    const pie = D3.pie(); // 파이생성
    const values = this.pieData.map(data => data.value);
    // Generate groups
    const arcSelection = this.svg.selectAll(".arc")
      .data(pie(values))
      .enter()
      .append("g")
      .attr("class", "arc");
    this.populatePie(arcSelection);
  }

  private populatePie(arcSelection): void {

    const innerRadius = this.radius - 50;
    const outerRadius = this.radius - 10;
    const pieColor = D3.scaleOrdinal(D3.schemeCategory10);
    // Generate the arcs
    const arc = D3.arc().innerRadius(0).outerRadius(outerRadius);
    // Draw arc paths
    arcSelection.append('path')
      .attr('d', arc)
      .attr('fill', (datum, index) => {
        return pieColor(this.pieData[index].label);
      });

    // tslint:disable-next-line:no-unused-expression
    arcSelection.append('text')
      .attr('transform', (datum: any) => {
        datum.innerRadius = 0;
        datum.outerRadius = outerRadius;
        return "translate(" + arc.centroid(datum) + ")";
      })
      .text((datum, index) => this.pieData[index].label)
      .style("text-anchor", "middle");


  }




}
