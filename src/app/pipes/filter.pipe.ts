import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], searchObject: any): Post[] {
    if (!searchObject.text.trim()) {
      return post
    } else {
      if (searchObject.searchType === 'title') {
        return post.filter(item => {
          return item.title.toLowerCase().includes(searchObject.text.toLowerCase())
        })
      } else {
        return post.filter(item => {
          return item.text.toLowerCase().includes(searchObject.text.toLowerCase())
        })
      }
    }
  }
}
