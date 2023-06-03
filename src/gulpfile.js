var gulp = require('gulp'),
war = require('gulp-war'),
    zip = require('gulp-zip');

gulp.task('war', async function () {
    
    gulp.src(["*.js", "*.tts", "*.ttf", "*.eot","*.html","*.map", "*.w", "*.wo","*.woff"
        ,"*.woff2","*.txt","*.svg","*.ico","*.css", "./**/*.*"
        ,"!gulpfile.js"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'sport',
            webappExtras: [`<filter>
            <filter-name>UrlRewriteFilter</filter-name>
            <filter-class>org.tuckey.web.filters.urlrewrite.UrlRewriteFilter</filter-class>
            <init-param>
               <param-name>logLevel</param-name>
               <param-value>FATAL</param-value>
            </init-param>
            <init-param>
               <param-name>confPath</param-name>
               <param-value>/WEB-INF/urlrewrite.xml</param-value>
            </init-param>
            <init-param>
               <param-name>statusEnabledOnHosts</param-name>
               <param-value>localhost</param-value>
            </init-param>
         </filter>
         <filter-mapping>
            <filter-name>UrlRewriteFilter</filter-name>
            <url-pattern>/*</url-pattern>
            <dispatcher>REQUEST</dispatcher>
         </filter-mapping>
      <error-page>
          <error-code>404</error-code>
         <location>/index.html</location>
      </error-page>`]
        }))
        .pipe(zip('sport.war'))
        .pipe(gulp.dest("./target"));
 
});
