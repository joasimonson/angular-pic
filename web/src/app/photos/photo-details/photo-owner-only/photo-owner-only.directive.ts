import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[apPhotoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective {
  @Input() ownedPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user || user.id != this.ownedPhoto.userId) {
        this.renderer.setElementStyle(this.element.nativeElement,'display','none');
      }
    });
  }
}
