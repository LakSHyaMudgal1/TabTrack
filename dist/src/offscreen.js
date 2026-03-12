import { B as Browser } from "../browser-polyfill.js";
import { M as Messages } from "../messages.js";
console.log("ofscreen");
Browser.runtime.onMessage.addListener((msg) => {
  console.log("ofscreen message");
  if (msg.message == Messages.PlayAudio) {
    if (msg.offscreen == void 0)
      return;
    playAudio(msg.sound);
  }
});
function playAudio(sound) {
  const audio = document.querySelector("audio");
  if (!audio)
    return;
  const path = Browser.runtime.getURL(`../assets/pomodoro-sounds/${sound}`);
  audio.src = path;
  audio.volume = 1;
  audio.play();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2NyZWVuLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb2Zmc2NyZWVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMnO1xuXG5jb25zb2xlLmxvZygnb2ZzY3JlZW4nKTtcblxuQnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtc2cgPT4ge1xuICBjb25zb2xlLmxvZygnb2ZzY3JlZW4gbWVzc2FnZScpO1xuICBpZiAobXNnLm1lc3NhZ2UgPT0gTWVzc2FnZXMuUGxheUF1ZGlvKSB7XG4gICAgaWYgKG1zZy5vZmZzY3JlZW4gPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBwbGF5QXVkaW8obXNnLnNvdW5kKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHBsYXlBdWRpbyhzb3VuZDogc3RyaW5nKSB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKTtcbiAgaWYgKCFhdWRpbykgcmV0dXJuO1xuXG4gIGNvbnN0IHBhdGggPSBCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGAuLi9hc3NldHMvcG9tb2Rvcm8tc291bmRzLyR7c291bmR9YCk7XG4gIGF1ZGlvLnNyYyA9IHBhdGg7XG4gIGF1ZGlvLnZvbHVtZSA9IDE7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLFFBQVEsSUFBSSxVQUFVO0FBRXRCLFFBQVEsUUFBUSxVQUFVLFlBQVksQ0FBTyxRQUFBO0FBQzNDLFVBQVEsSUFBSSxrQkFBa0I7QUFDMUIsTUFBQSxJQUFJLFdBQVcsU0FBUyxXQUFXO0FBQ3JDLFFBQUksSUFBSSxhQUFhO0FBQVc7QUFFaEMsY0FBVSxJQUFJLEtBQUs7QUFBQSxFQUNyQjtBQUNGLENBQUM7QUFFRCxTQUFTLFVBQVUsT0FBZTtBQUMxQixRQUFBLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsTUFBSSxDQUFDO0FBQU87QUFFWixRQUFNLE9BQU8sUUFBUSxRQUFRLE9BQU8sNkJBQTZCLEtBQUssRUFBRTtBQUN4RSxRQUFNLE1BQU07QUFDWixRQUFNLFNBQVM7QUFDZixRQUFNLEtBQUs7QUFDYjsifQ==
