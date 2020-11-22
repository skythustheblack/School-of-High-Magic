======================================================================================
IMBUE TRANSLATION TRIGGER
Please let me know if you find any typos or bugs! -Kelrhys
Edited by Skythus to include Wargems
======================================================================================
Type: regexp
Pattern: (smell of musk|smell of vanilla|smell of alcohol|smell of lavender|smell of sage|smell of cinnamon|opalesque tint|grey tint|brown tint|blue tint|azure tint|rose tint|aura of a stallion|aura of a lion|aura of a spider|aura of a boar|aura of a badger|aura of a monkey|Beryl formations|Bone formations|Diamond formations|Granite formations|Ivory formations|Mithril formations|Onyx formations|Peridot formations|Quartz formations|Sapphire formations|Topaz formations|aura of light surrounds|aura of darkness surrounds|aura of crimson energy|aura of well-being|aura of viciousness|aura of malevolence|feeling of unease|goosebumps being around|urge to sneeze|dull feeling comes over you|tickle in your throat|feeling of calm|ringing in your ears|itching sensation|hair-raising sensation grips you|feeling of nausea|feeling of drowsiness|clusters of frost cling|disturbance in the air surrounding|hissing sound|colour seems to be occuring|acid sheen|green moisture|odor of decay|white flames|ripples of blue electricty|feeling of security emanates|sparkle bewitches your senses|orange glow surrounds|gleam of mithril coat|whine is coming|drone issues from this|clicking sound|purring sound|silvery aura|purple gleam|swirling bands of yellow energy|ellipse-shaped azure diamond|ellipse-shaped black tourmaline|ellipse-shaped blue diamond|ellipse-shaped blue tourmaline|ellipse-shaped brown tourmaline|ellipse-shaped red tourmaline|ellipse-shaped violet tourmaline|ellipse-shaped white diamond|ellipse-shaped yellow tourmaline|glowing oval-shaped moonstone|glowing teardrop-shaped beryl|glowing teardrop-shaped bloodstone|glowing teardrop-shaped blue spinel|glowing teardrop-shaped carnelian|glowing teardrop-shaped diamond|glowing teardrop-shaped green jade|glowing teardrop-shaped opal|glowing teardrop-shaped pyrite|glowing teardrop-shaped blue spinel|glowing teardrop-shaped blue topaz|oval-shaped azure sapphire|oval-shaped black sapphire|oval-shaped blue sapphire|oval-shaped brown agate|oval-shaped green sapphire|oval-shaped magenta sapphire|oval-shaped mauve sapphire|oval-shaped milky quartz|oval-shaped moonstone|oval-shaped purple amethyst|oval-shaped rose quartz|oval-shaped smoky quartzoval-shaped striped chalcedony|oval-shaped violet sapphire|teardrop-shaped bloodstone|teardrop-shaped blue spinel|teardrop-shaped blue topaz|teardrop-shaped carnelian|teardrop-shaped colourless beryl|teardrop-shaped diamond|teardrop-shaped golden pyrite|teardrop-shaped green jade|teardrop-shaped opal|triangular-shaped blue agate|triangular-shaped green peridot|triangular-shaped orange garnet|triangular-shaped yellow amber|triangular-shaped yellow topaz)

 
Execute the following javascript:
  var translator = {
  'smell of musk':'[+str/ogrestone]',
  'smell of vanilla':'[+dis/steelstone]',
  'smell of alcohol':'[+con/dwarfstone]',
  'smell of lavender':'[+int/gnomestone]',
  'smell of sage':'[+wis/elfstone]',
  'smell of cinnamon':'[+dex/hobbitstone]',
  
  'opalesque tint':'[water spells/surfstone]',
  'grey tint':'[death spells/corpsestone]',
  'brown tint':'[earth spells/soilstone]',
  'blue tint':'[life spells/ankhstone]',
  'azure tint':'[air spells/guststone]',
  'rose tint':'[fire spells/emberstone]',

  'aura of a stallion':'[polearm/skewerstone]',
  'aura of a lion':'[sword/edgestone]',
  'aura of a spider':'[knife/needlestone]',
  'aura of a boar':'[club/crushstone]',
  'aura of a badger':'[axe/cleavestone]',
  'aura of a monkey':'[unarmed combat/palmstone]',

  'Beryl formations':'[fire-slay elf/charstone]',
  'Bone formations':'[fire-slay undead/lifestone]',
  'Diamond formations':'[fire-slay dragon/heavenstone]',
  'Granite formations':'[fire-slay ogre/doomstone]',
  'Ivory formations':'[fire-slay minotaur/hoofstone]',
  'Mithril formations':'[fire-slay dwarf/gallstone]',
  'Onyx formations':'[fire-slay goblin/darkstone]',
  'Peridot formations':'[fire-slay gnome/gearstone]',
  'Quartz formations':'[fire-slay halfling/piestone]',
  'Sapphire formations':'[fire-slay human/fellstone]',
  'Topaz formations':'[fire-slay troll/firestone]',

  'aura of light surrounds':'[+light/morningstone]',
  'aura of darkness surrounds':'[darkness/nightstone]',
  'aura of crimson energy':'[spellcraft/lodestone]',
  'aura of well-being':'[extra AC/wardstone]',
  'aura of viciousness':'[increased weapon-acc/guidestone]',
  'aura of malevolence':'[increased damage/stingstone]',

  'feeling of unease':'[resist life/mummystone]',
  'goosebumps being around':'[resist cold/woolstone]',
  'urge to sneeze':'[resist poison/sweatstone]',
  'dull feeling comes over you':'[resist magic/quietstone]',
  'tickle in your throat':'[resist water/duckstone]',
  'feeling of calm':'[resist fire/powderstone]',
  'ringing in your ears':'[resist air/tarpstone]',
  'itching sensation':'[resist acid/salvestone]',
  'hair-raising sensation grips you':'[resist electricity/rubberstone]',
  'feeling of nausea':'[resist death/larsstone]',
  'feeling of drowsiness':'[resist earth/riverstone]',

  'clusters of frost cling':'[cold damage/snapstone]',
  'disturbance in the air surrounding':'[air-bolts damage/blowstone]',
  'hissing sound':'[heat damage/bluestone]',
  'colour seems to be occuring':'[earth damage/sinkstone]',
  'acid sheen':'[acid damage/ruststone]',
  'green moisture':'[poison damage/aspstone]',
  'odor of decay':'[death damage/blackstone]',
  'white flames':'[elemental damage/orangestone]',
  'ripples of blue electricty':'[electricity damage/ampstone]',

  'feeling of security emanates':'[heals the user/balmstone]',
  'sparkle bewitches your senses':'[darkvision/torchstone]',
  'orange glow surrounds':'[awareness/eyestone]',
  'gleam of mithril coats':'[increased durability/ironstone]',
  'whine is coming':'[speed/mercurystone]',
  'drone issues from this':'[slow opponent/grogstone]',

  'clicking sound':'[blindfighting/molestone]',
  'purring sound':'[hide+sneak/rodentstone]',
  'silvery aura':'[two handed combat/twinstone]',
  'purple gleam':'[parry/defstone]',
  'swirling bands of yellow energy':'[defence/shieldstone]',
  
  'ellipse-shaped azure diamond':'[increase to hit and and damage (W)]',
  'ellipse-shaped black tourmaline':'[death magic (W)]',
  'ellipse-shaped blue diamond':'[increase damage stat of the weapon (W)]',
  'ellipse-shaped blue tourmaline':'[water magic (W)]',
  'ellipse-shaped brown tourmaline':'[earth magic (W)]',
  'ellipse-shaped red tourmaline':'[fire magic (W)]',
  'ellipse-shaped violet tourmaline':'[life magic (W)]',
  'ellipse-shaped white diamond':'[increased hit (W)]',
  'ellipse-shaped yellow tourmaline':'[air magic (W)]',

  'glowing oval-shaped moonstone':'[featherweight (A)]',
  'glowing teardrop-shaped beryl':'[cold magic protection (A)]',
  'glowing teardrop-shaped bloodstone':'[death magic protection (A)]',
  'glowing teardrop-shaped blue spinel':'[air magic protection (A)]',
  'glowing teardrop-shaped carnelian':'[fire magic protection (A)]',
  'glowing teardrop-shaped diamond':'[extra AC (A)]',
  'glowing teardrop-shaped green jade':'[poison protection (A)]',
  'glowing teardrop-shaped opal':'[life magic protection (A)]',
  'glowing teardrop-shaped pyrite':'[earth magic protection (A)]',
  'glowing teardrop-shaped blue spinel':'[air magic protection (A)]',
  'glowing teardrop-shaped blue topaz':'[water magic protection (A)]',

  'oval-shaped azure sapphire':'[2h combat (A)]',
  'oval-shaped black sapphire':'[hide (A)]',
  'oval-shaped blue sapphire':'[defence (A)]',
  'oval-shaped brown agate':'[abjuration (A)]',
  'oval-shaped green sapphire':'[parry (A)]',
  'oval-shaped magenta sapphire':'[remove traps skill (A)]',
  'oval-shaped mauve sapphire':'[open lock (A)]',
  'oval-shaped milky quartz':'[illusion (A)]',
  'oval-shaped moonstone':'[armours weight reduction (A)]',
  'oval-shaped purple amethyst':'[conjuration (A)]',
  'oval-shaped rose quartz':'[transmutation (A)]',
  'oval-shaped smoky quartz':'[divination (A)]',
  'oval-shaped striped chalcedony':'[enchantment (A)]',
  'oval-shaped violet sapphire':'[sneak (A)]',

  'teardrop-shaped bloodstone':'[death magic protection (A)]',
  'teardrop-shaped blue spinel':'[air magic protection (A)]',
  'teardrop-shaped blue topaz':'[water magic protection (A)]',
  'teardrop-shaped carnelian':'[fire magic protection (A)]',
  'teardrop-shaped colourless beryl':'[cold magic protection.(A)]',
  'teardrop-shaped diamond':'[Extra AC (A)]',
  'teardrop-shaped golden pyrite':'[earth magic protection (A)]',
  'teardrop-shaped green jade':'[poison magic protection (A)]',
  'teardrop-shaped opal':'[life magic protection (A)]',

  'triangular-shaped blue agate':'[waterbreath when pressed(A)]',
  'triangular-shaped green peridot':'[truesight when pressed (A)]',
  'triangular-shaped orange garnet':'[enhaced reflexes (A)]',
  'triangular-shaped yellow amber':'[Darkvision (A)]',
  'triangular-shaped yellow topaz':'[Protection from scry when pressed]'
};
 
gwc.output.replace(args[1],'<span style="color:skyblue">'+args[1] + " " + translator[args[1]]+'</span>',true);
