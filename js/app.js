Vue.component('footer-template', {
    template: `
        <div class="footer">
        <p>
            Copyright (c) 2023 Kazuki Matsuda 
        </p>
        <p>
            Released under the <a href="https://opensource.org/licenses/mit-license.php">MIT license</a>
        </p>
        </div>
    `,
})
new Vue({
    el: '#app',
})