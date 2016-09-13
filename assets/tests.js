define('dummy/tests/blanket-options', ['exports'], function (exports) {
  /* globals blanket, module */

  var options = {
    modulePrefix: 'ember-frost-info-bar',
    filter: '//.*ember-frost-info-bar/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
      reporters: ['lcov'],
      autostart: true,
      lcovOptions: {
        outputFile: 'coverage/lcov.info',
        renamer: function renamer(fileName) {
          return fileName.replace('ember-frost-info-bar', 'addon') + '.js';
        }
      }
    }
  };

  if (typeof exports === 'undefined') {
    blanket.options(options);
  } else {
    module.exports = options;
  }
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/integration/components/ember-frost-info-bar-test', ['exports', 'chai', 'ember-hook', 'ember-mocha', 'mocha'], function (exports, _chai, _emberHook, _emberMocha, _mocha) {

  var testTemplate = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 3,
                'column': 4
              },
              'end': {
                'line': 5,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      Yielded icon\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child1 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 6,
                'column': 4
              },
              'end': {
                'line': 8,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      Yielded title\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child2 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 9,
                'column': 4
              },
              'end': {
                'line': 11,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      Yielded summary\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child3 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 12,
                'column': 4
              },
              'end': {
                'line': 14,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      Yielded controls\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child4 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 15,
                'column': 4
              },
              'end': {
                'line': 17,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'action.button', [], ['icon', 'infobar-create', 'text', 'Click me!'], ['loc', [null, [16, 6], [16, 62]]]]],
          locals: ['action'],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': false,
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 2,
              'column': 2
            },
            'end': {
              'line': 18,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['block', 'block-slot', ['icon'], [], 0, null, ['loc', [null, [3, 4], [5, 19]]]], ['block', 'block-slot', ['title'], [], 1, null, ['loc', [null, [6, 4], [8, 19]]]], ['block', 'block-slot', ['summary'], [], 2, null, ['loc', [null, [9, 4], [11, 19]]]], ['block', 'block-slot', ['controls'], [], 3, null, ['loc', [null, [12, 4], [14, 19]]]], ['block', 'block-slot', ['actions'], [], 4, null, ['loc', [null, [15, 4], [17, 19]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();

    return {
      meta: {
        'fragmentReason': {
          'name': 'missing-wrapper',
          'problems': ['wrong-type']
        },
        'revision': 'Ember@2.6.2',
        'loc': {
          'source': null,
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 18,
            'column': 21
          }
        }
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode('\n');
        dom.appendChild(el0, el1);
        var el1 = dom.createComment('');
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [['block', 'frost-info-bar', [], ['hook', ['subexpr', '@mut', [['get', 'hook', ['loc', [null, [2, 25], [2, 29]]]]], [], []]], 0, null, ['loc', [null, [2, 2], [18, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());

  (0, _emberMocha.describeComponent)('ember-frost-info-bar', 'Integration: EmberFrostInfoBarComponent', {
    integration: true
  }, function () {
    var props = undefined;
    (0, _mocha.beforeEach)(function () {
      (0, _emberHook.initialize)();
      props = {
        hook: 'my-info-bar'
      };
      this.setProperties(props);
      this.render(testTemplate);
    });

    (0, _emberMocha.it)('has a default hook name', function () {
      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 6
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('\n        ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['content', 'frost-info-bar', ['loc', [null, [2, 8], [2, 26]]]]],
          locals: [],
          templates: []
        };
      })()));

      (0, _chai.expect)((0, _emberHook.$hook)('info-bar').hasClass('frost-info-bar')).to.be['true'];
    });

    (0, _emberMocha.it)('has a hook for icon', function () {
      (0, _chai.expect)((0, _emberHook.$hook)('my-info-bar-icon').text().trim()).to.eql('Yielded icon');
    });

    (0, _emberMocha.it)('has a hook for title', function () {
      (0, _chai.expect)((0, _emberHook.$hook)('my-info-bar-title').text().trim()).to.eql('Yielded title');
    });

    (0, _emberMocha.it)('has a hook for summary', function () {
      (0, _chai.expect)((0, _emberHook.$hook)('my-info-bar-summary').text().trim()).to.eql('Yielded summary');
    });

    (0, _emberMocha.it)('has a hook for controls', function () {
      (0, _chai.expect)((0, _emberHook.$hook)('my-info-bar-controls').text().trim()).to.eql('Yielded controls');
    });

    (0, _emberMocha.it)('has a hook for actions', function () {
      (0, _chai.expect)((0, _emberHook.$hook)('my-info-bar-action').text().trim()).to.eql('Click me!');
    });
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-mocha'], function (exports, _dummyTestsHelpersResolver, _emberMocha) {

  (0, _emberMocha.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/unit/components/info-bar-test', ['exports', 'ember-mocha', 'mocha'], function (exports, _emberMocha, _mocha) {
  var expect = chai.expect;

  (0, _emberMocha.describeComponent)('frost-info-bar', 'FrostInfoBarComponent', {
    unit: true
  }, function () {
    var component = undefined;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
    });

    (0, _mocha.it)('includes className frost-info-bar', function () {
      expect(component.classNames).to.include('frost-info-bar');
    });
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map