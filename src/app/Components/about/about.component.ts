import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent implements AfterViewInit {

  experiance: number = 0;
  employees: number = 0;
  clients: number = 0;
  partners: number = 0;

  // ViewChild for elements to observe
  @ViewChild('experienceCounter') experienceCounter!: ElementRef;
  @ViewChild('employeesCounter') employeesCounter!: ElementRef;
  @ViewChild('clientsCounter') clientsCounter!: ElementRef;
  @ViewChild('partnersCounter') partnersCounter!: ElementRef;

  ngAfterViewInit(): void {
    // Initialize the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Determine which element is intersecting and start its counter
          if (entry.target === this.experienceCounter.nativeElement) {
            this.startExperienceCounter();
          }
          if (entry.target === this.employeesCounter.nativeElement) {
            this.startEmployeesCounter();
          }
          if (entry.target === this.clientsCounter.nativeElement) {
            this.startClientsCounter();
          }
          if (entry.target === this.partnersCounter.nativeElement) {
            this.startPartnersCounter();
          }
        }
      });
    });

    // Observe the target elements
    observer.observe(this.experienceCounter.nativeElement);
    observer.observe(this.employeesCounter.nativeElement);
    observer.observe(this.clientsCounter.nativeElement);
    observer.observe(this.partnersCounter.nativeElement);
  }

  // Counter functions
  startExperienceCounter() {
    let experianceCountStop: any = setInterval(() => {
      this.experiance++;
      if (this.experiance == 20) {
        clearInterval(experianceCountStop);
      }
    }, 25);
  }

  startEmployeesCounter() {
    let employeesCountStop: any = setInterval(() => {
      this.employees++;
      if (this.employees == 150) {
        clearInterval(employeesCountStop);
      }
    }, 25);
  }

  startClientsCounter() {
    let clientsCountStop: any = setInterval(() => {
      this.clients++;
      if (this.clients == 60) {
        clearInterval(clientsCountStop);
      }
    }, 25);
  }

  startPartnersCounter() {
    let partnersCountStop: any = setInterval(() => {
      this.partners++;
      if (this.partners == 12) {
        clearInterval(partnersCountStop);
      }
    }, 25);
  }

}
