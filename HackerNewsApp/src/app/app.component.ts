import { Component } from '@angular/core';
import { MenuItem } from './Models/menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackerNewsApp';
  headerItems = [
    new MenuItem("new", "https://news.ycombinator.com/newest"), 
    new MenuItem("past", "https://news.ycombinator.com/front"),
    new MenuItem("comments", "https://news.ycombinator.com/newcomments"),
    new MenuItem("ask", "https://news.ycombinator.com/ask"),
    new MenuItem("show", "https://news.ycombinator.com/show"),
    new MenuItem("jobs", "https://news.ycombinator.com/jobs"),
    new MenuItem("submit", "https://news.ycombinator.com/submit")
  ]

  footerItems = [
    new MenuItem("Guidelines", "https://news.ycombinator.com/newsguidelines.html"), 
    new MenuItem("FAQ", "https://news.ycombinator.com/newsfaq.html"),
    new MenuItem("Lists", "https://news.ycombinator.com/lists"),
    new MenuItem("API", "https://github.com/HackerNews/API"),
    new MenuItem("Security", "https://news.ycombinator.com/security.html"),
    new MenuItem("Legal", "https://www.ycombinator.com/legal/"),
    new MenuItem("Apply to YC", "https://www.ycombinator.com/apply/"),
    new MenuItem("Contact", "")
  ]
}
