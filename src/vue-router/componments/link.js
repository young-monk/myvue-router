export default {
    props: {
        to: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: "a"
        }
    },
    methods: {
        handlerClick: function(){
            if(this.$router.mode === "hash"){
                location.hash = "#" + this.to
            }else{
                history.pushState(null,null,this.to)
                this.$router.history.current.path = this.to
            }
        }
    },
    render(h) {
        const config = {}
        if (this.tag === "a" && this.$router.mode == "hash") {
            config.attrs = {
                href: "#" + this.to
            }
        } else {
            config.on = {
                click: this.handlerClick
            }
        }

        return h(this.tag, config, this.$slots.default)
    }
}