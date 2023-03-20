'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-pokemon-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ecfc84102f06bf633990d065bb1434e0ce538bd16d3500d44889e9af555de6bd942716dccf8577d241ce09125e11486034b79da15be51e32681e07f27bb75c0f"' : 'data-target="#xs-components-links-module-AppModule-ecfc84102f06bf633990d065bb1434e0ce538bd16d3500d44889e9af555de6bd942716dccf8577d241ce09125e11486034b79da15be51e32681e07f27bb75c0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ecfc84102f06bf633990d065bb1434e0ce538bd16d3500d44889e9af555de6bd942716dccf8577d241ce09125e11486034b79da15be51e32681e07f27bb75c0f"' :
                                            'id="xs-components-links-module-AppModule-ecfc84102f06bf633990d065bb1434e0ce538bd16d3500d44889e9af555de6bd942716dccf8577d241ce09125e11486034b79da15be51e32681e07f27bb75c0f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PokemonModule.html" data-type="entity-link" >PokemonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' : 'data-target="#xs-components-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' :
                                            'id="xs-components-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                            <li class="link">
                                                <a href="components/PokemonDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PokemonDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PokemonListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PokemonListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' : 'data-target="#xs-directives-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' :
                                        'id="xs-directives-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                        <li class="link">
                                            <a href="directives/CardStylingDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardStylingDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' : 'data-target="#xs-pipes-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' :
                                            'id="xs-pipes-links-module-PokemonModule-b49077960ab8ff990d1d673217bb2d2f28642fffa23eab024305610b58edac7b9f43c95236eed0d06342f499a516fa35984ecf5e66058490f05996aff7c166d6"' }>
                                            <li class="link">
                                                <a href="pipes/PkmnTypeColorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PkmnTypeColorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Pokemon.html" data-type="entity-link" >Pokemon</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});