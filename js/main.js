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
        },
        events:{
            'click': 'showAlert'
        },
        showAlert: function (){
            alert('Вы кликнули по мышке !');
        }
    });

    App.Collections.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });
    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function(task) {
            var taskView = new App.Views.Task({ model:task });
            this.$el.append(taskView.render().el);
        }
    })

    var tasksCollection = new App.Collections.Task([
        {
            title: 'Родиться',
            priority: 4
        },
        {
            title: 'Немножко пожить',
            priority: 3
        },
        {
            title: 'Умереть',
            priority: 5
        },

    ]);

    var tasksView = new App.Views.Tasks({ collection: tasksCollection });

    $('.tasks').html(tasksView.render().el);

});