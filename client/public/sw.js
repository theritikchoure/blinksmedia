self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: "Push Notification Body",
    icon: "/blinks.png",
  });
});
