// Use this file for your unit tests.
// When you are ready to submit, REMOVE all using statements to Festival Manager (entities/controllers/etc)
// Test ONLY the Stage class. 
namespace FestivalManager.Tests
{
    using NUnit.Framework;
    using System;
    using System.Linq;

    [TestFixture]
	public class StageTests
    {
		private Stage sut;
		[SetUp]
		public void Setup()
        {
			sut = new Stage();
        }
		[Test]
	    public void Ctor_Inits1()
	    {
			Assert.That(sut.Performers, Is.Not.Null);
		}
		[Test]
		public void PerformersReturns()
        {
			var performer = new Performer("Ivan", "Ivanov", 22);
			sut.AddPerformer(performer);
			Performer[] per = sut.Performers.ToArray();
			Assert.AreEqual(performer.FullName, per[0].FullName);
			Assert.AreEqual(1, per.Length);
        }
		[Test]

		public void AddPerformer_Throws()
        {
			Assert.Throws<ArgumentNullException>(() => sut.AddPerformer(null));
        }
		[Test]
		public void AddPerformer_Throws2()
        {
			var performer = new Performer("Ivan", "Ivanov", 10);
			Assert.Throws<ArgumentException>(() => sut.AddPerformer(performer));
        }
		[Test]
		public void AddSong_Throws()
        {
			Assert.Throws<ArgumentNullException>(() => sut.AddSong(null));
		}
		[Test]
		public void AddSong_Throws2()
		{
			Song song = new Song("Pesen", new TimeSpan(0, 0, 1));
			Assert.Throws<ArgumentException>(() => sut.AddSong(song));
		}
		[Test]
		[TestCase(null,"pesho")]
		[TestCase("Pesho",null)]
		[TestCase(null,null)]
		public void AddSongToPerformer_Throws(string songName, string performerName)
        {
			Assert.Throws<ArgumentNullException>(() => sut.AddSongToPerformer(songName, performerName));
		}
		[Test]
		[TestCase("Pesen", "pesho")]
		[TestCase("Durcho", "Ivan Ivanov")]
		[TestCase("test", "pesho")]

		public void AddSongToPerformer_Throws2(string songName, string performerName)
		{
			Song song = new Song("Pesen", new TimeSpan(1, 1, 1));
			var performer = new Performer("Ivan", "Ivanov", 20);
			sut.AddPerformer(performer);
			sut.AddSong(song);
			Assert.Throws<ArgumentException>(() => sut.AddSongToPerformer(songName, performerName));
		}
		[Test]
		public void AddSong_Adds()
        {
			Song song = new Song("Pesen", new TimeSpan(1, 1, 1));
			var performer = new Performer("Ivan", "Ivanov", 20);
			sut.AddPerformer(performer);
			sut.AddSong(song);
			sut.AddSongToPerformer("Pesen", "Ivan Ivanov");
			Assert.AreEqual(1, performer.SongList.Count());
		}
		[Test]
		public void AddSong_Returns()
		{
			Song song = new Song("Pesen", new TimeSpan(1, 1, 1));
			var performer = new Performer("Ivan", "Ivanov", 20);
			sut.AddPerformer(performer);
			sut.AddSong(song);
			string meesage = sut.AddSongToPerformer("Pesen", "Ivan Ivanov");
			Assert.AreEqual($"{song} will be performed by {performer}", meesage);
		}
		[Test]
		public void Play_Plays()
        {
			Song song = new Song("Pesen", new TimeSpan(1, 1, 1));
			var performer = new Performer("Ivan", "Ivanov", 20);
			sut.AddPerformer(performer);
			sut.AddSong(song);
			sut.AddSongToPerformer("Pesen", "Ivan Ivanov");
			string message = sut.Play();
			Assert.AreEqual("1 performers played 1 songs", message);
		}
	}
}