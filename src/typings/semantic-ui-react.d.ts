/// <reference path="../../node_modules/@types/react/index.d.ts" />

declare module "semantic-ui-react" {


    type InputType = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'number' | 'range' | 'search' | 'select' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week'

    type SemanticColor = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black'
    type SemanticRotation = 'clockwise' | 'counterclockwise'
    type SemanticFloatDirection = 'left' | 'right'
    type SemanticSize = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'
    type SemanticTextAlignment = 'left' | 'center' | 'right' | 'justified'
    type SemanticCountry = 'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua' | 'ai' | 'anguilla' | 'al' | 'albania' | 'am' | 'armenia' | 'an' | 'netherlands antilles' | 'ao' | 'angola' | 'ar' | 'argentina' | 'as' | 'american samoa' | 'at' | 'austria' | 'au' | 'australia' | 'aw' | 'aruba' | 'ax' | 'aland islands' | 'az' | 'azerbaijan' | 'ba' | 'bosnia' | 'bb' | 'barbados' | 'bd' | 'bangladesh' | 'be' | 'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' | 'burundi' | 'bj' | 'benin' | 'bm' | 'bermuda' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' | 'bhutan' | 'bv' | 'bouvet island' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' | 'cocos islands' | 'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'congo brazzaville' | 'ch' | 'switzerland' | 'ci' | 'cote divoire' | 'ck' | 'cook islands' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' | 'china' | 'co' | 'colombia' | 'cr' | 'costa rica' | 'cs' | 'serbia' | 'cu' | 'cuba' | 'cv' | 'cape verde' | 'cx' | 'christmas island' | 'cy' | 'cyprus' | 'cz' | 'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' | 'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' | 'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' | 'estonia' | 'eg' | 'egypt' | 'eh' | 'western sahara' | 'er' | 'eritrea' | 'es' | 'spain' | 'et' | 'ethiopia' | 'eu' | 'european union' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'falkland islands' | 'fm' | 'micronesia' | 'fo' | 'faroe islands' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' | 'georgia' | 'gf' | 'french guiana' | 'gh' | 'ghana' | 'gi' | 'gibraltar' | 'gl' | 'greenland' | 'gm' | 'gambia' | 'gn' | 'guinea' | 'gp' | 'guadeloupe' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' | 'sandwich islands' | 'gt' | 'guatemala' | 'gu' | 'guam' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hong kong' | 'hm' | 'heard island' | 'hn' | 'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' | 'ie' | 'ireland' | 'il' | 'israel' | 'in' | 'india' | 'io' | 'indian ocean territory' | 'iq' | 'iraq' | 'ir' | 'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' | 'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' | 'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' | 'km' | 'comoros' | 'kn' | 'saint kitts and nevis' | 'kp' | 'north korea' | 'kr' | 'south korea' | 'kw' | 'kuwait' | 'ky' | 'cayman islands' | 'kz' | 'kazakhstan' | 'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' | 'sri lanka' | 'lr' | 'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' | 'ma' | 'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' | 'marshall islands' | 'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' | 'macau' | 'mp' | 'northern mariana islands' | 'mq' | 'martinique' | 'mr' | 'mauritania' | 'ms' | 'montserrat' | 'mt' | 'malta' | 'mu' | 'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' | 'mz' | 'mozambique' | 'na' | 'namibia' | 'nc' | 'new caledonia' | 'ne' | 'niger' | 'nf' | 'norfolk island' | 'ng' | 'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' | 'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' | 'nu' | 'niue' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' | 'peru' | 'pf' | 'french polynesia' | 'pg' | 'new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' | 'saint pierre' | 'pn' | 'pitcairn islands' | 'pr' | 'puerto rico' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' | 'py' | 'paraguay' | 'qa' | 'qatar' | 're' | 'reunion' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' | 'rwanda' | 'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' | 'sudan' | 'se' | 'sweden' | 'sg' | 'singapore' | 'sh' | 'saint helena' | 'si' | 'slovenia' | 'sj' | 'svalbard' | 'jan mayen' | 'sk' | 'slovakia' | 'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' | 'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome' | 'sv' | 'el salvador' | 'sy' | 'syria' | 'sz' | 'swaziland' | 'tc' | 'caicos islands' | 'td' | 'chad' | 'tf' | 'french territories' | 'tg' | 'togo' | 'th' | 'thailand' | 'tj' | 'tajikistan' | 'tk' | 'tokelau' | 'tl' | 'timorleste' | 'tm' | 'turkmenistan' | 'tn' | 'tunisia' | 'to' | 'tonga' | 'tr' | 'turkey' | 'tt' | 'trinidad' | 'tv' | 'tuvalu' | 'tw' | 'taiwan' | 'tz' | 'tanzania' | 'ua' | 'ukraine' | 'ug' | 'uganda' | 'um' | 'us minor islands' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' | 'uzbekistan' | 'va' | 'vatican city' | 'vc' | 'saint vincent' | 've' | 'venezuela' | 'vg' | 'british virgin islands' | 'vi' | 'us virgin islands' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' | 'wf' | 'wallis and futuna' | 'ws' | 'samoa' | 'ye' | 'yemen' | 'yt' | 'mayotte' | 'za' | 'south africa' | 'zm' | 'zambia' | 'zw' | 'zimbabwe'

    interface GenericProps {
        // --- Optional ---
        className?: string,
        ref?: (el: Node | React.ReactInstance) => any,
    }

    // ======================================================
    // Elements
    // ======================================================
    // Button
    // ----------------------------------
    interface ButtonProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        content?: string
    }
    class Button extends React.Component<ButtonProps, void> { }

    // Container
    // ----------------------------------
    interface ContainerProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        fluid?: boolean,
        text?: boolean,
        /** Describes how the text inside this component should be aligned. */
        textAlign?: SemanticTextAlignment,
    }
    class Container extends React.Component<ContainerProps, void> { }

    // Divider
    // ----------------------------------
    interface DividerProps extends GenericProps {
        // --- Optional ---
        /** Primary content of the Divider */
        children?: React.ReactNode,
        /** Divider can segment content horizontally */
        horizontal?: boolean,
        /** Divider can segment content vertically */
        vertical?: boolean,
        /** Divider can have it's colours inverted */
        inverted?: boolean,
        /** Divider can be fitted without any space above or below it */
        fitted?: boolean,
        /** Divider can divide content without creating a dividing line */
        hidden?: boolean,
        /** Divider can provide greater margins to divide sections of content */
        section?: boolean,
        /** Divider can clear the content above it */
        clearing?: boolean,
    }
    class Divider extends React.Component<DividerProps, void> { }

    // Flag
    // ----------------------------------
    interface FlagProps extends GenericProps {
        // --- Required ---
        name: SemanticCountry,
    }
    class Flag extends React.Component<FlagProps, void> { }

    // Icon
    // ----------------------------------
    interface IconProps extends GenericProps {
        // --- Optional ---
        bordered?: boolean,
        /** Class names for custom styling. */
        className?: string,
        /** Icon can formatted to appear circular */
        circular?: boolean,
        /** Color of the icon. */
        color?: SemanticColor,
        /** Icons can display a smaller corner icon */
        corner?: boolean,
        /** Show that the icon is inactive */
        disabled?: boolean,
        /** Fitted, without space to left or right of Icon. */
        fitted?: boolean,
        /** Icon can flipped */
        flipped?: 'horizontally' | 'vertically'
        /** Formatted to have its colors inverted for contrast */
        inverted?: boolean,
        /** Name of the icon */
        name?: string,
        /** Icon can be formatter as a link */
        link?: boolean,
        /** Icon can be used as a simple loader */
        loading?: boolean,
        /** Icon can rotated */
        rotated?: SemanticRotation,
        /** Size of the icon. */
        size?: SemanticSize,
    }
    class Icon extends React.Component<IconProps, void> { }

    // Image
    // ----------------------------------
    interface ImageProps extends GenericProps {
        // --- Required ---
        src: string,

        // --- Optional ---
        alt?: string,
    }
    class Image extends React.Component<ImageProps, void> { }

    // Header
    // ----------------------------------
    interface HeaderComponentProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,

        as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', // TODO: add function
    }
    class HeaderComponent extends React.Component<HeaderComponentProps, void> { }

    interface SubheaderComponentProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
    }
    class SubheaderComponent extends React.Component<SubheaderComponentProps, void> { }

    class Header extends React.Component<HeaderComponentProps, void> {
        // TODO: add content
        public static Subheader: SubheaderComponent
    }

    // Input
    // ----------------------------------
    interface InputProps extends GenericProps {
        // --- Optional ---
        name?: string,
        type?: InputType,
    }
    class Input extends React.Component<InputProps, void> { }

    // ListItem
    // ----------------------------------
    interface ListItemProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        className?: string,
        description?: React.ReactNode,
        header?: string,
        icon?: React.ReactNode,
        image?: React.ReactNode,
    }
    class ListItem extends React.Component<ListItemProps, void> { }

    // List
    // ----------------------------------
    interface ListProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
    }
    class List extends React.Component<ListProps, void> {
        public static ListItem: ListItem
    }

    // Loader
    // ----------------------------------
    interface LoaderProps extends GenericProps {
        // --- Optional ---
        active?: boolean,
        children?: React.ReactNode,
        disabled?: boolean,
        indeterminate?: boolean,
        inverted?: boolean,
        inline?: boolean | 'centered',
        size?: SemanticSize,
        text?: React.ReactNode,
    }
    class Loader extends React.Component<LoaderProps, void> { }

    // Rail
    // ----------------------------------
    interface RailProps extends GenericProps {
        // --- Required ---
        position: SemanticFloatDirection,

        // --- Optional ---
        attached?: boolean,
        children?: React.ReactNode,
        close?: boolean | 'very',
        dividing?: boolean,
        internal?: boolean,
        // TODO(zuko): this should not support 'medium' from SemanticSize
        size?: SemanticSize,
    }
    class Rail extends React.Component<RailProps, void> { }

    // Segment
    // ----------------------------------
    interface SegmentsProps extends GenericProps { }
    class Segments extends React.Component<SegmentsProps, void> { }

    interface SegmentProps extends GenericProps {
        // --- Optional ---
        heading?: React.ReactNode,
    }
    class Segment extends React.Component<SegmentProps, void> {
        public static Segments: Segments
    }

    // ======================================================
    // Collections
    // ======================================================
    // Breadcrumb
    // ----------------------------------
    interface BreadcrumbDividerProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        icon?: React.ReactNode,
    }
    class BreadcrumbDivider extends React.Component<BreadcrumbDividerProps, void> { }

    interface BreadcrumbSectionProps extends GenericProps {
        // --- Optional ---
        active?: boolean,
        children?: React.ReactNode,
        link?: boolean,
        href?: string,
        onClick?: React.EventHandler<any>,
    }
    class BreadcrumbSection extends React.Component<BreadcrumbSectionProps, void> { }

    interface BreadcrumbProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        // TODO(zuko): is this limited to a string, or can it be a ReactNode?
        divider?: string,
        icon?: React.ReactNode,
        sections?: Array<any>,
        // TODO(zuko): should not include 'medium'
        size?: SemanticSize,
    }
    class Breadcrumb extends React.Component<BreadcrumbProps, void> {
        public static Divider: BreadcrumbDivider
        public static Section: BreadcrumbSection
    }
    // TODO(zuko): Form
    // TODO(zuko): Grid
    // TODO(zuko): Menu
    // Message
    // ----------------------------------
    interface MessageContentProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        icon?: React.ReactNode,
    }
    class MessageContent extends React.Component<MessageContentProps, void> { }

    interface MessageHeaderProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        icon?: React.ReactNode,
    }
    class MessageHeader extends React.Component<MessageHeaderProps, void> { }

    interface MessageItemProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        icon?: React.ReactNode,
    }
    class MessageItem extends React.Component<MessageItemProps, void> { }

    interface MessageListProps extends GenericProps {
        // --- Optional ---
        children?: React.ReactNode,
        icon?: React.ReactNode,
        items?: Array<string>,
    }
    class MessageList extends React.Component<MessageListProps, void> { }

    interface MessageProps extends GenericProps {
        // --- Optional ---
        attached?: boolean | 'bottom',
        children?: React.ReactNode,
        className?: string,
        color?: SemanticColor,
        compact?: boolean,
        content?: string,
        floating?: boolean,
        header?: React.ReactNode,
        hidden?: boolean,
        icon?: string | boolean,
        list?: Array<string>
        onDismiss?: React.ReactEventHandler<any>,
        // TODO(zuko): should not include 'medium'
        size?: SemanticSize,
        visible?: boolean,
        // possible types
        error?: boolean,
        info?: boolean,
        negative?: boolean,
        positive?: boolean,
        success?: boolean,
        warning?: boolean,
    }
    class Message extends React.Component<MessageProps, void> {
        public static Content: MessageContent
        public static Header: MessageHeader
        public static Item: MessageItem
        public static List: MessageList
    }

    interface CheckboxProps extends GenericProps {
        /** Whether or not checkbox is checked. */
        checked?: boolean,
        /** The initial value of checked. */
        defaultChecked?: boolean,
        /** Format to emphasize the current selection state */
        slider?: boolean,
        /** Format as a radio element. This means it is an exclusive option.*/
        radio?: boolean,
        /** Format to show an on or off choice */
        toggle?: boolean,
        /** A checkbox can appear disabled and be unable to change states */
        disabled?: boolean,
        /** Removes padding for a label. Auto applied when there is no label. */
        fitted?: boolean,
        /** The text of the associated label element. */
        label?: string,
        /** HTML input type, either checkbox or radio. */
        type?: string,
        /** The HTML input name. */
        name?: string,
        /** Called with (event, { name, value, checked }) when the user attempts to change the value. */
        onChange?: React.ReactEventHandler<any>,
        /** A checkbox can be read-only and unable to change states */
        readOnly?: boolean,
        /** The HTML input value. */
        value?: string
    }

    class Checkbox extends React.Component<CheckboxProps, void> { }

    interface DropDownItem {
        /** Style as the currently chosen item. */
        active?: boolean,
        /** Primary content. */
        children?: React.ReactNode,
        /** Additional classes. */
        className?: string,
        /** Additional text with less emphasis. */
        description?: string | React.ReactNode, // TODO check type
        /** A dropdown item can be disabled. */
        disabled?: boolean,
        /** Add an icon to the item. */
        icon?: string,
        /**
         * The item currently selected by keyboard shortcut.
         * This is not the active item.
         */
        selected?: boolean,
        /** Display text. */
        text?: React.ReactNode | string, // TODO: check type
        /** Stored value */
        value?: number | string,
    }

    interface NameValue<T> {
        name: string,
        value: T
    }

    interface DropdownProps extends GenericProps {

        // ------------------------------------
        // Behavior
        // ------------------------------------
        /** Add an icon by name or as a component. */
        icon?: string | React.ReactNode,
        /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
        options?: [DropDownItem],
        /** Controls whether or not the dropdown menu is displayed. */
        open?: boolean,
        /** Initial value of open. */
        defaultOpen?: boolean,
        /** Primary content. */
        children?: React.ReactNode, // TODO: check type
        /** Current value or value array if multiple. Creates a controlled component. */
        value?: string | number | [string] | [number], // TODO: mixed array?
        /** Initial value or value array if multiple. */
        defaultValue?: string | number | [string] | [number],
        /** Placeholder text. */
        placeholder?: string,
        /** Name of the hidden input which holds the value. */
        name?: string,
        /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
        trigger?: React.ReactNode,
        /**
         * Allow user additions to the list of options (boolean).
         * Requires the use of `selection`, `options` and `search`.
         */
        allowAdditions?: boolean,
        // TODO: add additionPosition
        /** Label prefixed to an option added by a user. */
        additionLabel?: string,
        /** Message to display when there are no results. */
        noResultsMessage?: string,
        /** Define whether the highlighted item should be selected on blur. */
        selectOnBlur?: boolean,
        /** Make the dropdown options searchable by substring matching (default) or with a custom search function. */
        search?: boolean | (() => any), // check callback

        // ------------------------------------
        // Callbacks
        // ------------------------------------

        /** Called with the name and new value added by the user. Use this to update the options list. */
        onAddItem?: (name: string, value: string) => any,
        /** Called with the React Synthetic Event on Dropdown blur. */
        onBlur?: React.FocusEventHandler<React.ReactHTMLElement<HTMLInputElement>>,
        /** Called with the React Synthetic Event and { name, value } on change. */
        onChange?: ((event: React.FormEvent<React.ReactHTMLElement<HTMLInputElement>>, data: NameValue<string>) => any),
        /** Called with the React Synthetic Event and current value on search input change. */
        onSearchChange?: ((event: React.FormEvent<React.ReactHTMLElement<HTMLInputElement>>, value: string) => any),
        /** Called with the React Synthetic Event on Dropdown focus. */
        onFocus?: React.FocusEventHandler<React.ReactHTMLElement<HTMLInputElement>>,
        /** Called with the React Synthetic Event on Dropdown mouse down. */
        onMouseDown?: React.MouseEventHandler<React.ReactHTMLElement<HTMLInputElement>>,

        // ------------------------------------
        // Style
        // ------------------------------------

        /** A Dropdown can reduce its complexity */
        basic?: boolean,
        /** Format the Dropdown to appear as a button. */
        button?: boolean,
        /** Additional classes. */
        className?: string,
        /** Format the dropdown to only take up as much width as needed. */
        compact?: boolean,
        /** Format the dropdown to only take up as much width as possible. */
        fluid?: boolean,
        /** Display the menu as detached from the Dropdown. */
        floating?: boolean,
        /** A dropdown menu can contain a header. */
        header?: React.ReactNode,
        inline?: boolean,
        labeled?: boolean,
        // TODO: add linkItem
        /** Allow selecting multiple options. */
        multiple?: boolean,
        // TODO: add pointing
        /** The text displayed in the dropdown, usually for the active item. */
        text?: string,
        /** Behave as an html select. */
        selection?: boolean,
        simple?: boolean,
        loading?: boolean,
        error?: boolean,
        disabled?: boolean,
        scrolling?: boolean,

    }

    class Dropdown extends React.Component<DropdownProps, void> { }

    /*
    class Radio {

    }

    class Select {

    }

    class TextArea {

    }

    class Label {

    }

    class Form {

    }
    */

    // TODO(zuko): Table

    // ======================================================
    // Modules
    // ======================================================
    // TODO(zuko): Accordion
    // TODO(zuko): Checkbox
    // TODO(zuko): Dropdown
    // TODO(zuko): Modal
    // TODO(zuko): Progress

    // ======================================================
    // Views
    // ======================================================
    // TODO(zuko): Item
    // TODO(zuko): Statistic

    // ======================================================
    // Addons
    // ======================================================
    // NOTE(zuko): This category breaks alphabetical ordering because it relies
    // on components defined in other categories
    // ======================================================
    // TODO(zuko): Confirm
    // TODO(zuko): Radio
    // TODO(zuko): Select
    // TODO(zuko): Textarea
}
