// on home page
<p>
  <button md-raised-button color="primary" routerLink="/about">MORE ABOUT TRACY</button>
</p>

//navbar

<md-toolbar-row>
  <button md-button routerLink="/media">MEDIA</button>
</md-toolbar-row>

//social cards refactor
export class SocialPicsCardComponent implements OnInit {
  function range(start, end) { const arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
    }
    return arr;
  }

  pictures: Object=[] = [{
    image: range(1,47).map(i => `assets/pictures/ladyleet-${i}.jpg`)
}]
