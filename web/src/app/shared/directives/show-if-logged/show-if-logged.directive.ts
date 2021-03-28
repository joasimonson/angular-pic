import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setElementStyle(
        this.element.nativeElement,
        'display',
        'none'
      );
  }
}
