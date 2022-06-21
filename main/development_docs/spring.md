### hot redeploy

Spring Boot offers a spring.thymeleaf.cache configuration property which you can set to false if you want to disable the template cache so that templates can be modified on the fly.

Note however that Maven's spring-boot:run does run templates from the generated überjar, so I don't think this would work. However, if you run your application from IntelliJ IDEA by selecting the application class and choosing Run... (you seem to cite these two methods as the same thing but they are actually different ways to start your app), then you should be able to see changes in your templates simply by asking IntelliJ to build the project (⌘+F9 in macOS, Ctrl+F9in Windows).
