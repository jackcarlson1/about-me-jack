# Jack Carlson — About Me

A personal About Me web page built while learning HTML, CSS, and JavaScript.

🔗 **Live site: [about-me-jack.vercel.app](https://about-me-jack.vercel.app)**

![Screenshot of the About Me page](about-me/profile.png)

---

This repository is my personal coding lab. The main project is the **About Me**
page in [`about-me/index.html`](about-me/index.html).

## Interactive buttons

This week I added three buttons to the About Me page using JavaScript:

- **Change color** — Toggles the main heading between magenta and navy. Each click
  switches to the other color.
- **Tell me a fact** — Displays a random fun fact about me. It cycles through every
  fact once before repeating, and never shows the same fact twice in a row.
- **Clicked N times** — A counter button that starts at "Clicked 0 times" and counts
  up by one with every click.

## Data Sources

- **My listening data** — Song/artist/album stats on the Music Replay page come from
  my personal Apple Music Replay history (Jan–May 2026), typed in by hand.

- **iTunes Search API** (Apple) — Used to fetch album/artist artwork and exact
  Apple Music page links for the Replay page.
  Docs: <https://performance-partners.apple.com/search-api>
  Artwork and music metadata are © Apple and the respective rights holders. This is a
  personal, non-commercial project and is not affiliated with or endorsed by Apple.

- **FBI Wanted API** — Powers the live "Most Wanted" page ([`about-me/wanted.html`](about-me/wanted.html)).
  Docs: <https://www.fbi.gov/wanted/api>
  Data is provided by the U.S. Federal Bureau of Investigation. This project is not
  affiliated with, endorsed by, or sponsored by the FBI; all data belongs to the FBI.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file.

## Acknowledgments

- Built as a personal learning project while teaching myself HTML, CSS, and JavaScript.
- Tutorials and references I followed: _(Wikipedia)_
- Claude (Anthropic's AI assistant) acted as my coding collaborator — explaining
  concepts, walking me through Git and GitHub, and helping me write and debug the
  JavaScript. I typed in my own content and made the final decisions.

