/// <reference path="../../node_modules/@types/react/index.d.ts" />

declare module "semantic-ui-react" {


    type InputType = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'number' | 'range' | 'search' | 'select' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week'

    type SemanticCOLORS = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'twitter' | 'google plus' | 'facebook'

    type SemanticSOCIAL = 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube'

    type SemanticROTATION = 'clockwise' | 'counterclockwise'

    type SemanticFLOATS = 'left' | 'right'

    type SemanticSIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'
    type SemanticTEXTALIGNMENTS = 'left' | 'center' | 'right' | 'justified'
    type SemanticVERTICALALIGNMENTS = 'top' | 'middle' | 'bottom'
    type SemanticWIDTHSNUMBER = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'
    type SemanticWIDTHSSTRING = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven' | 'twelve' | 'thirteen' | 'fourteen' | 'fifteen' | 'sixteen'
    type SemanticCOUNTRY = 'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua' | 'ai' | 'anguilla' | 'al' | 'albania' | 'am' | 'armenia' | 'an' | 'netherlands antilles' | 'ao' | 'angola' | 'ar' | 'argentina' | 'as' | 'american samoa' | 'at' | 'austria' | 'au' | 'australia' | 'aw' | 'aruba' | 'ax' | 'aland islands' | 'az' | 'azerbaijan' | 'ba' | 'bosnia' | 'bb' | 'barbados' | 'bd' | 'bangladesh' | 'be' | 'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' | 'burundi' | 'bj' | 'benin' | 'bm' | 'bermuda' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' | 'bhutan' | 'bv' | 'bouvet island' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' | 'cocos islands' | 'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'congo brazzaville' | 'ch' | 'switzerland' | 'ci' | 'cote divoire' | 'ck' | 'cook islands' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' | 'china' | 'co' | 'colombia' | 'cr' | 'costa rica' | 'cs' | 'serbia' | 'cu' | 'cuba' | 'cv' | 'cape verde' | 'cx' | 'christmas island' | 'cy' | 'cyprus' | 'cz' | 'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' | 'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' | 'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' | 'estonia' | 'eg' | 'egypt' | 'eh' | 'western sahara' | 'er' | 'eritrea' | 'es' | 'spain' | 'et' | 'ethiopia' | 'eu' | 'european union' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'falkland islands' | 'fm' | 'micronesia' | 'fo' | 'faroe islands' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' | 'georgia' | 'gf' | 'french guiana' | 'gh' | 'ghana' | 'gi' | 'gibraltar' | 'gl' | 'greenland' | 'gm' | 'gambia' | 'gn' | 'guinea' | 'gp' | 'guadeloupe' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' | 'sandwich islands' | 'gt' | 'guatemala' | 'gu' | 'guam' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hong kong' | 'hm' | 'heard island' | 'hn' | 'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' | 'ie' | 'ireland' | 'il' | 'israel' | 'in' | 'india' | 'io' | 'indian ocean territory' | 'iq' | 'iraq' | 'ir' | 'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' | 'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' | 'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' | 'km' | 'comoros' | 'kn' | 'saint kitts and nevis' | 'kp' | 'north korea' | 'kr' | 'south korea' | 'kw' | 'kuwait' | 'ky' | 'cayman islands' | 'kz' | 'kazakhstan' | 'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' | 'sri lanka' | 'lr' | 'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' | 'ma' | 'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' | 'marshall islands' | 'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' | 'macau' | 'mp' | 'northern mariana islands' | 'mq' | 'martinique' | 'mr' | 'mauritania' | 'ms' | 'montserrat' | 'mt' | 'malta' | 'mu' | 'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' | 'mz' | 'mozambique' | 'na' | 'namibia' | 'nc' | 'new caledonia' | 'ne' | 'niger' | 'nf' | 'norfolk island' | 'ng' | 'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' | 'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' | 'nu' | 'niue' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' | 'peru' | 'pf' | 'french polynesia' | 'pg' | 'new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' | 'saint pierre' | 'pn' | 'pitcairn islands' | 'pr' | 'puerto rico' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' | 'py' | 'paraguay' | 'qa' | 'qatar' | 're' | 'reunion' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' | 'rwanda' | 'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' | 'sudan' | 'se' | 'sweden' | 'sg' | 'singapore' | 'sh' | 'saint helena' | 'si' | 'slovenia' | 'sj' | 'svalbard' | 'jan mayen' | 'sk' | 'slovakia' | 'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' | 'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome' | 'sv' | 'el salvador' | 'sy' | 'syria' | 'sz' | 'swaziland' | 'tc' | 'caicos islands' | 'td' | 'chad' | 'tf' | 'french territories' | 'tg' | 'togo' | 'th' | 'thailand' | 'tj' | 'tajikistan' | 'tk' | 'tokelau' | 'tl' | 'timorleste' | 'tm' | 'turkmenistan' | 'tn' | 'tunisia' | 'to' | 'tonga' | 'tr' | 'turkey' | 'tt' | 'trinidad' | 'tv' | 'tuvalu' | 'tw' | 'taiwan' | 'tz' | 'tanzania' | 'ua' | 'ukraine' | 'ug' | 'uganda' | 'um' | 'us minor islands' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' | 'uzbekistan' | 'va' | 'vatican city' | 'vc' | 'saint vincent' | 've' | 'venezuela' | 'vg' | 'british virgin islands' | 'vi' | 'us virgin islands' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' | 'wf' | 'wallis and futuna' | 'ws' | 'samoa' | 'ye' | 'yemen' | 'yt' | 'mayotte' | 'za' | 'south africa' | 'zm' | 'zambia' | 'zw' | 'zimbabwe'
    type SemanticPOSITIONING = 'top left' | 'top right' | 'bottom right' | 'bottom left' | 'right center' | 'left center' | 'top center' | 'bottom center';

    type SemanticGenericOnClick = (event: any, value: any) => void;
    type SemanticFormOnClick = (event: any, object: Object) => void;
    type SemanticSearchOnClick = (event: any, value: any, text: string) => void;  // TODO - not sure if this is correct.

    // ======================================================
    // Events
    // ======================================================

    interface ReactMouseEvents<T> {
        // MouseEvents

        /**
       * Called after user's click.
       * @param {SyntheticEvent} event - React's original SyntheticEvent.
       * @param {object} data - All props.
       */
        onClick?: React.MouseEventHandler<T>;
        onContextMenu?: React.MouseEventHandler<T>;
        onDoubleClick?: React.MouseEventHandler<T>;
        onDrag?: React.DragEventHandler<T>;
        onDragEnd?: React.DragEventHandler<T>;
        onDragEnter?: React.DragEventHandler<T>;
        onDragExit?: React.DragEventHandler<T>;
        onDragLeave?: React.DragEventHandler<T>;
        onDragOver?: React.DragEventHandler<T>;
        onDragStart?: React.DragEventHandler<T>;
        onDrop?: React.DragEventHandler<T>;
        onMouseDown?: React.MouseEventHandler<T>;
        onMouseEnter?: React.MouseEventHandler<T>;
        onMouseLeave?: React.MouseEventHandler<T>;
        onMouseMove?: React.MouseEventHandler<T>;
        onMouseOut?: React.MouseEventHandler<T>;
        onMouseOver?: React.MouseEventHandler<T>;
        onMouseUp?: React.MouseEventHandler<T>;
    }

    // Focus Events
    interface ReactFocusEvents<T> {
        onFocus?: React.FocusEventHandler<T>;
        onBlur?: React.FocusEventHandler<T>;
    }

    interface FormEventHandler<E> {
        (event: E, ...params: any[]): void;
    }

    // Form Events
    interface ReactFormEvents<T> {
        onChange?: FormEventHandler<React.FormEvent<T>>;
        onInput?: FormEventHandler<React.FormEvent<T>>;
        onSubmit?: FormEventHandler<React.FormEvent<T>>;
    }

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
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
        textAlign?: SemanticTEXTALIGNMENTS,
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
        name: SemanticCOUNTRY,
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
        color?: SemanticCOLORS,
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
        rotated?: SemanticROTATION,
        /** Size of the icon. */
        size?: SemanticSIZES,
    }
    class Icon extends React.Component<IconProps, void> { }

    // Image
    // ----------------------------------
    interface ImageProps extends ReactMouseEvents<any> {

        /** Alternate text for the image specified. */
        alt?: string;

        /** An element type to render as (string or function). */
        as?: any;

        /** An image may be formatted to appear inline with text as an avatar. */
        avatar?: boolean;

        /** An image may include a border to emphasize the edges of white or transparent content. */
        bordered?: boolean;

        /** An image can appear centered in a content block. */
        centered?: boolean;

        /** Additional classes. */
        className?: string;

        /** An image can show that it is disabled and cannot be selected. */
        disabled?: boolean;

        /** Shorthand for Dimmer. */
        dimmer?: any;

        /** An image can sit to the left or right of other content. */
        floated?: SemanticFLOATS;

        /** An image can take up the width of its container. */
        fluid?: boolean;

        /** The img element height attribute. */
        height?: string | number;

        /** Renders the Image as an <a> tag with this href. */
        href?: string;

        /** An image may appear inline. */
        inline?: boolean;

        /** Shorthand for Label. */
        label?: LabelProps;

        /** An image may appear rounded or circular. */
        shape?: boolean | 'rounded' | 'circular';

        /** An image may appear at different sizes. */
        size?: SemanticSIZES;

        /** An image can specify that it needs an additional spacing to separate it from nearby content. */
        spaced?: boolean | 'left' | 'right';

        /** Specifies the URL of the image. */
        src?: string;

        /** Whether or not to add the ui className. */
        ui?: boolean;

        /** An image can specify its vertical alignment */
        verticalAlign?: SemanticVERTICALALIGNMENTS;

        /** The img element width attribute */
        width?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;

        /** An image can render wrapped in a `div.ui.image` as alternative HTML markup */
        wrapped?: any;
    }

    interface ImageClass extends React.ComponentClass<ImageProps> {
        Group: typeof ImageGroup;
    }

    const Image: ImageClass;

    interface ImageGroupProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** A group of images can be formatted to have the same size. */
        size?: SemanticSIZES;
    }
    export const ImageGroup: React.ComponentClass<ImageGroupProps>;

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
        size?: SemanticSIZES,
        text?: React.ReactNode,
    }
    class Loader extends React.Component<LoaderProps, void> { }

    // Rail
    // ----------------------------------
    interface RailProps extends GenericProps {
        // --- Required ---
        position: SemanticFLOATS,

        // --- Optional ---
        attached?: boolean,
        children?: React.ReactNode,
        close?: boolean | 'very',
        dividing?: boolean,
        internal?: boolean,
        // TODO(zuko): this should not support 'medium' from SemanticSize
        size?: SemanticSIZES,
    }
    class Rail extends React.Component<RailProps, void> { }

    // Segment
    // ----------------------------------
    interface SegmentProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Attach segment to other content, like a header */
        attached?: any;

        /** A basic segment has no special formatting */
        basic?: boolean;

        /** Primary content. */
        children?: React.ReactNode;

        /** A segment can be circular */
        circular?: boolean;

        /** Additional classes. */
        className?: string;

        /** A segment can clear floated content */
        clearing?: boolean;

        /** Segment can be colored */
        color?: SemanticCOLORS | SemanticSOCIAL;

        /** A segment may take up only as much space as is necessary */
        compact?: boolean;

        /** A segment may show its content is disabled */
        disabled?: boolean;

        /** Segment content can be floated to the left or right */
        floated?: SemanticFLOATS;

        /** A segment can have its colors inverted for contrast */
        inverted?: boolean;

        /** A segment may show its content is being loaded */
        loading?: boolean;

        /** A segment can increase its padding */
        padded?: boolean;

        /** Formatted to look like a pile of pages. */
        piled?: boolean;

        /** A segment may be formatted to raise above the page. */
        raised?: boolean;

        /** A segment can be formatted to appear less noticeable */
        secondary?: boolean;

        /** A segment can have different sizes. */
        size?: SemanticSIZES;

        /** Formatted to show it contains multiple pages. */
        stacked?: boolean;

        /** A segment can be formatted to appear even less noticeable */
        tertiary?: boolean;

        /** Formats content to be aligned as part of a vertical group. */
        textAlign?: SemanticTEXTALIGNMENTS;

        /** Formats content to be aligned vertically */
        vertical?: boolean;
    }

    interface SegmentClass extends React.ComponentClass<SegmentProps> {
        Group: typeof SegmentGroup;
    }

    export const Segment: SegmentClass;

    interface SegmentGroupProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** A segment may take up only as much space as is necessary */
        compact?: boolean;

        /** Formats content to be aligned horizontally */
        horizontal?: boolean;

        /** Formatted to look like a pile of pages. */
        piled?: boolean;

        /** A segment group may be formatted to raise above the page. */
        raised?: boolean;

        /** A segment group can have different sizes. */
        size?: SemanticSIZES;

        /** Formatted to show it contains multiple pages. */
        stacked?: boolean;
    }

    export const SegmentGroup: React.ComponentClass<SegmentGroupProps>;


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
        size?: SemanticSIZES,
    }
    class Breadcrumb extends React.Component<BreadcrumbProps, void> {
        public static Divider: BreadcrumbDivider
        public static Section: BreadcrumbSection
    }
    // TODO(zuko): Form
    //
    // Grid
    // ----------------------------------
    export type GridPropReversed = 'computer' | 'computer vertically' | 'mobile' | 'mobile vertically' | 'tablet' | 'tablet vertically'
    export interface GridProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** A grid can have rows divided into cells. */
        celled?: boolean | 'internally';

        /** A grid can have its columns centered. */
        centered?: boolean;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** Represents column count per row in Grid. */
        columns?: number | SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number | 'equal';

        /** A grid can have dividers between its columns. */
        divided?: boolean | 'vertically';

        /** A grid can double its column width on tablet and mobile sizes. */
        doubling?: boolean;

        /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
        padded?: boolean | 'horizontally' | 'vertically';

        /** A grid can increase its gutters to allow for more negative space. */
        relaxed?: boolean | 'very';

        /** A grid can specify that its columns should reverse order at different device sizes. */
        reversed?: GridPropReversed;

        /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
        stackable?: boolean;

        /** An can stretch its contents to take up the entire grid height. */
        stretched?: boolean;

        /** A grid can specify its text alignment. */
        textAlign?: SemanticTEXTALIGNMENTS;

        /** A grid can specify its vertical alignment to have all its columns vertically centered. */
        verticalAlign?: SemanticVERTICALALIGNMENTS;
    }

    interface GridClass extends React.ComponentClass<GridProps> {
        Column: typeof GridColumn;
        Row: typeof GridRow;
    }

    export const Grid: GridClass;

    type GridPropOnly = 'computer' | 'large screen' | 'mobile' | 'tablet mobile' | 'tablet' | 'widescreen'
    interface GridColumnProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** A grid column can be colored. */
        color?: SemanticCOLORS;

        /** A column can specify a width for a computer. */
        computer?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;

        /** A column can sit flush against the left or right edge of a row. */
        floated?: SemanticFLOATS;

        /** A column can specify a width for a large screen device. */
        largeScreen?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;

        /** A column can specify a width for a mobile device. */
        mobile?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;

        /** A column can appear only for a specific device, or screen sizes. */
        only?: GridPropOnly;

        /** An can stretch its contents to take up the entire grid or row height. */
        stretched?: boolean;

        /** A column can specify a width for a tablet device. */
        tablet?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;

        /** A row can specify its text alignment. */
        textAlign?: SemanticTEXTALIGNMENTS;

        /** A column can specify its vertical alignment to have all its columns vertically centered. */
        verticalAlign?: SemanticVERTICALALIGNMENTS;

        /** A column can specify a width for a wide screen device. */
        widescreen?: number | SemanticWIDTHSSTRING | number;

        /** Represents width of column. */
        width?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
    }

    export const GridColumn: React.ComponentClass<GridColumnProps>

    interface GridRowProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** A row can have its columns centered. */
        centered?: boolean;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** A grid row can be colored. */
        color?: SemanticCOLORS;

        /** Represents column count per line in Row. */
        columns?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number | 'equal';

        /** A row can have dividers between its columns. */
        divided?: boolean;

        /** A row can appear only for a specific device, or screen sizes. */
        only?: GridPropOnly;

        /** A  row can specify that its columns should reverse order at different device sizes. */
        reversed?: GridPropReversed;

        /** An can stretch its contents to take up the entire column height. */
        stretched?: boolean;

        /** A row can specify its text alignment. */
        textAlign?: SemanticTEXTALIGNMENTS;

        /** A row can specify its vertical alignment to have all its columns vertically centered. */
        verticalAlign?: SemanticVERTICALALIGNMENTS;
    }

    export const GridRow: React.ComponentClass<GridRowProps>;

    //
    //
    // Menu (from node_modules/semantic-ui-react/src/collections/Menu/index.d.ts)
    type MenuPropsIcon = 'labeled';
    type MenuPropsTabular = 'right';
    type MenuPropsFixed = 'left' | 'right' | 'bottom' | 'top';
    type MenuPropsAttached = 'bottom' | 'top';

    interface MenuProps {
        activeIndex?: number;
        /** An element type to render as (string or function). */
        as?: any;
        /** A menu may be attached to other content segments. */
        attached?: boolean | MenuPropsAttached;
        /** A menu item or menu can have no borders. */
        borderless?: boolean;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** Additional colors can be specified. */
        color?: SemanticCOLORS;
        /** A menu can take up only the space necessary to fit its content. */
        compact?: boolean;
        /** Initial activeIndex value. */
        defaultActiveIndex?: number;
        /** A menu can be fixed to a side of its context. */
        fixed?: MenuPropsFixed;
        /** A menu can be floated. */
        floated?: boolean | SemanticFLOATS;
        /** A vertical menu may take the size of its container. */
        fluid?: boolean;
        /** A menu may have labeled icons. */
        icon?: boolean | MenuPropsIcon;
        /** A menu may have its colors inverted to show greater contrast. */
        inverted?: boolean;
        /** Shorthand array of props for Menu. */
        items?: any;  // TODO - check type;
        /**
         * onClick handler for MenuItem. Mutually exclusive with children.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All item props.
         */
        onItemClick?: React.MouseEventHandler<HTMLDivElement>;
        /** A pagination menu is specially formatted to present links to pages of content. */
        pagination?: boolean;
        /** A menu can point to show its relationship to nearby content. */
        pointing?: boolean;
        /** A menu can adjust its appearance to de-emphasize its contents. */
        secondary?: boolean;
        /** A menu can vary in size. */
        size?: SemanticSIZES;  // TODO - remove medium and big.
        /** A menu can stack at mobile resolutions. */
        stackable?: boolean;
        /** A menu can be formatted to show tabs of information. */
        tabular?: boolean | MenuPropsTabular;
        /** A menu can be formatted for text content. */
        text?: boolean;
        /** A vertical menu displays elements vertically. */
        vertical?: boolean;
        /** A menu can have its items divided evenly. */
        widths?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number;
    }

    interface MenuClass extends React.ComponentClass<MenuProps> {
        Header: typeof MenuHeader;
        Item: typeof MenuItem;
        Menu: typeof MenuMenuItem;
    }

    const Menu: MenuClass;

    interface MenuHeaderProps {
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** Shorthand for primary content. */
        content?: any;
    }

    const MenuHeader: React.ComponentClass<MenuHeaderProps>;

    interface MenuItemProps extends ReactMouseEvents<HTMLElement> {
        /** A menu item can be active. */
        active?: boolean;
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** Additional colors can be specified. */
        color?: SemanticCOLORS;
        /** Shorthand for primary content. */
        content?: string;
        /** A menu item or menu can remove element padding, vertically or horizontally. */
        fitted?: boolean | 'horizontally' | 'vertically';
        /** A menu item may include a header or may itself be a header. */
        header?: boolean;
        /** Add an icon by icon name or pass an <Icon /.> */
        icon?: any; // TODO - check type.
        /** MenuItem index inside Menu. */
        index?: number;
        /** A menu item can be link. */
        link?: boolean;
        /** Internal name of the MenuItem. */
        name?: string;
        /** A menu item can take right position. */
        position?: 'right';
        /** A augmented Menu Item can use the to prop to redirect Links */
        to?: string;
    }

    const MenuItem: React.ComponentClass<MenuItemProps>;

    interface MenuMenuProps {
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** A sub menu can take right position. */
        position?: 'right';
    }

    const MenuMenuItem: React.ComponentClass<MenuMenuProps>;


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
        color?: SemanticCOLORS,
        compact?: boolean,
        content?: string,
        floating?: boolean,
        header?: React.ReactNode,
        hidden?: boolean,
        icon?: string | boolean,
        list?: Array<string>
        onDismiss?: React.ReactEventHandler<any>,
        // TODO(zuko): should not include 'medium'
        size?: SemanticSIZES,
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

    type DropdownPropPointing = 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right'
    type DropdownPropAdditionPosition = 'top' | 'bottom';

    interface DropdownProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {

        /** Label prefixed to an option added by a user. */
        additionLabel?: string;
        /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
        additionPosition?: DropdownPropAdditionPosition;
        /**
         * Allow user additions to the list of options (boolean).
         * Requires the use of `selection`, `options` and `search`.
         */
        allowAdditions?: any;
        /** An element type to render as (string or function). */
        as?: any;
        /** A Dropdown can reduce its complexity */
        basic?: boolean;
        /** Format the Dropdown to appear as a button. */
        button?: boolean;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** A compact dropdown has no minimum width. */
        compact?: boolean;
        /** Initial value of open. */
        defaultOpen?: boolean;
        /** Currently selected label in multi-select. */
        defaultSelectedLabel?: any;
        /** Initial value or value array if multiple. */
        defaultValue?: string | number | Array<string> | Array<number>;
        /** A disabled dropdown menu or item does not allow user interaction. */
        disabled?: boolean;
        /** An errored dropdown can alert a user to a problem. */
        error?: boolean;
        /** A dropdown menu can contain floated content. */
        floating?: boolean;
        /** A dropdown can take the full width of its parent */
        fluid?: boolean;
        /** A dropdown menu can contain a header. */
        header?: React.ReactNode;
        /** Shorthand for Icon. */
        icon?: any;
        /** A dropdown can be formatted to appear inline in other content. */
        inline?: boolean;
        /** A dropdown can be formatted as a menu item. */
        item?: boolean;
        /** A dropdown can be labeled. */
        labeled?: boolean;
        /** A dropdown can show that it is currently loading data. */
        loading?: boolean;
        /** A selection dropdown can allow multiple selections. */
        multiple?: boolean;
        /** Name of the hidden input which holds the value. */
        name?: string;
        /** Message to display when there are no results. */
        noResultsMessage?: string;
        /**
         * Called when a user adds a new item. Use this to update the options list.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props and the new item's value.
         */
        onAddItem?: React.MouseEventHandler<HTMLSelectElement>;
        /**
         * Called on search input change.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {string} value - Current value of search input.
         */
        onSearchChange?: React.FormEventHandler<HTMLSelectElement>;
        /** Controls whether or not the dropdown menu is displayed. */
        open?: boolean;
        /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
        options?: Array<DropdownItemProps>;
        /** Placeholder text. */
        placeholder?: string;
        /** A dropdown can be formatted so that its menu is pointing. */
        pointing?: boolean | DropdownPropPointing;
        /**
         * A function that takes (data, index, defaultLabelProps) and returns
         * shorthand for Label .
         */
        renderLabel?: any;
        /** A dropdown can have its menu scroll. */
        scrolling?: boolean;
        /**
         * A selection dropdown can allow a user to search through a large list of choices.
         * Pass a function here to replace the default search.
         */
        search?: ((filteredOptions: any, searchQuery: any) => void) | boolean; // TODO -add search function;
        /** Define whether the highlighted item should be selected on blur. */
        selectOnBlur?: boolean;
        /** A dropdown can be used to select between choices in a form. */
        selection?: any;
        /** A simple dropdown can open without Javascript. */
        simple?: boolean;
        /** A dropdown can receive focus. */
        tabIndex?: string;
        /** The text displayed in the dropdown, usually for the active item. */
        text?: string | React.ReactNode;
        /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
        trigger?: any;
        /** Current value or value array if multiple. Creates a controlled component. */
        value?: string | number | Array<string> | Array<number>;
    }

    interface DropdownClass extends React.ComponentClass<DropdownProps> {
        Divider: typeof DropdownDivider;
        Header: typeof DropdownHeader;
        Item: typeof DropdownItem;
        Menu: typeof DropdownMenu;
    }

    const Dropdown: DropdownClass;

    interface DropdownDividerProps {
        /** An element type to render as (string or function). */
        as?: any;
        /** Additional classes. */
        className?: string;
    }

    const DropdownDivider: React.ComponentClass<DropdownDividerProps>;

    interface DropdownHeaderProps {
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** Shorthand for primary content. */
        content?: any;
        /** Shorthand for Icon. */
        icon?: any;
    }

    const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

    interface DropdownItemProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
        /** Style as the currently chosen item. */
        active?: boolean;
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** Additional text with less emphasis. */
        description?: any;
        /** A dropdown item can be disabled. */
        disabled?: boolean;
        /** Shorthand for Flag. */
        flag?: any;
        /** Shorthand for Icon. */
        icon?: any;
        /** Shorthand for Image. */
        image?: any;
        /** Shorthand for Label. */
        label?: any;
        /**
         * The item currently selected by keyboard shortcut.
         * This is not the active item.
         */
        selected?: boolean;
        /** Display text. */
        text?: any;
        /** Stored value */
        value?: number | string;
    }

    const DropdownItem: React.ComponentClass<DropdownItemProps>;

    interface DropdownMenuProps {
        /** An element type to render as (string or function). */
        as?: any;
        /** Primary content. */
        children?: React.ReactNode;
        /** Additional classes. */
        className?: string;
        /** A dropdown menu can scroll. */
        scrolling?: boolean;
    }

    const DropdownMenu: React.ComponentClass<DropdownMenuProps>;

    /*
    class Radio {

    }

    class Select {

    }

    class TextArea {

    }
    */

    // Label
    type LabelPropAttached = 'top' | 'bottom' | 'top right' | 'top left' | 'bottom left' | 'bottom right';
    type LabelPropPointing = 'above' | 'below' | 'left' | 'right';
    type LabelPropCorner = 'left' | 'right';

    interface LabelProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** A label can be active. */
        active?: boolean;

        /** A label can attach to a content segment. */
        attached?: LabelPropAttached;

        /** A label can reduce its complexity. */
        basic?: boolean;

        /** Primary content. */
        children?: React.ReactNode;

        /** A label can be circular. */
        circular?: boolean;

        /** Additional classes. */
        className?: string;

        /** Color of the label. */
        color?: SemanticCOLORS;

        /** Shorthand for primary content. */
        content?: any;

        /** A label can position itself in the corner of an element. */
        corner?: boolean | LabelPropCorner;

        /** Shorthand for LabelDetail. */
        detail?: any;

        /** Formats the label as a dot. */
        empty?: any;

        /** Float above another element in the upper right corner. */
        floating?: boolean;

        /** A horizontal label is formatted to label content along-side it horizontally. */
        horizontal?: boolean;

        /** Add an icon by icon name or pass an <Icon /.> */
        icon?: any;

        /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
        image?: any;

        /**
         * Called on click.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onClick?: React.MouseEventHandler<HTMLDivElement>;

        /**
         * Adds an "x" icon, called when "x" is clicked.
         *
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @param {object} data - All props.
         */
        onRemove?: React.FormEventHandler<HTMLDivElement>;

        /** A label can point to content next to it. */
        pointing?: boolean | LabelPropPointing;

        /** Shorthand for Icon to appear as the last child and trigger onRemove. */
        removeIcon?: any;

        /** A label can appear as a ribbon attaching itself to an element. */
        ribbon?: boolean | 'right';

        /** A label can have different sizes. */
        size?: SemanticSIZES;

        /** A label can appear as a tag. */
        tag?: boolean;
    }

    interface LabelClass extends React.ComponentClass<LabelProps> {
        Detail: typeof LabelDetail;
        Group: typeof LabelGroup;
    }

    const Label: LabelClass;

    interface LabelDetailProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Primary content. */
        children?: React.ReactNode;

        /** Additional classes. */
        className?: string;

        /** Shorthand for primary content. */
        content?: any;
    }

    const LabelDetail: React.ComponentClass<LabelDetailProps>;

    interface LabelGroupProps {

        /** An element type to render as (string or function). */
        as?: any;

        /** Primary content. */
        children?: React.ReactNode;

        /** Labels can share shapes. */
        circular: boolean;

        /** Additional classes. */
        className?: string;

        /** Label group can share colors together. */
        color?: SemanticCOLORS;

        /** Label group can share sizes together. */
        size?: SemanticSIZES;

        /** Label group can share tag formatting. */
        tag?: boolean;
    }

    const LabelGroup: React.ComponentClass<LabelGroupProps>;





    /*
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
