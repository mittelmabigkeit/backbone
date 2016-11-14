$(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    window.template = function(id) {
        return _.template( $('#' + id). html() );
    };

    App.Models.Task = Backbone.Model.extend({});
    App.Views.Task = Backbone.View.extend({
        tagName: 'li',
        render: function () {
            this.$el.html( this.model.get('title'));
            return this;
        }
    });

    //App.Collections.Task = Backbone.Collection.extend({
    //    model: App.Models.Task
    //})

    var task = new App.Models.Task({
        title: 'Родиться',
        priority: 4
    });

    //var tasks = new App.Collections.Task([
    //    {
    //        title: 'Родиться',
    //        priority: 4
    //    },
    //    {
    //        title: 'Немножко пожить',
    //        priority: 3
    //    },
    //    {
    //        title: 'Умереть',
    //        priority: 5
    //    },
    //
    //])

    var taskView = new App.Views.Task({ model:task });

    console.log(taskView.render().el);

});