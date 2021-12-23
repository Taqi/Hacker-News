import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../Core/Service/story.service';
import { Comment } from '../Models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentList: Comment[]
  id: any //type string|null

  constructor(private storyService: StoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('storyID');
    this.receiveComments();
  }

  receiveComments()
  {
    this.storyService.getComments(this.id).subscribe(commentList =>
      {
        this.commentList = commentList;
      })
  }

}
